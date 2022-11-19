import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmationModal from "../../Home/Home/Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../Home/Home/Shared/Loader/Loader";

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const response = await fetch(`http://localhost:15000/doctors`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          return data.data;
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  const deleteHandler = async (doctor) => {
    try {
      const response = await fetch(
        `http://localhost:15000/doctors/${doctor?._id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      refetch();
    } catch (error) {
      console.log(error.message);
    }
  };

  const cancelHandler = () => {
    setDeletingDoctor(null);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-3xl">Manage Doctors</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <tr key={doctor?._id}>
                <th>{index + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor?.photo} alt="" />
                    </div>
                  </div>
                </th>
                <td>{doctor?.name}</td>
                <td>{doctor?.email}</td>
                <td>{doctor?.speciality}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          deleteHandler={deleteHandler}
          modalData={deletingDoctor}
          cancelHandler={cancelHandler}
          title="Are you sure you want to delete this?"
          message={`Data of ${deletingDoctor?.name} will be deleted and cann't be undone`}
        />
      )}
    </div>
  );
};

export default ManageDoctor;
