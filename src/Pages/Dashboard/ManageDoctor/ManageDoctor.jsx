import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Home/Home/Shared/Loader/Loader";

const ManageDoctor = () => {
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

  const handleDelete = async (doctor) => {
    if (doctor) {
      const aggree = window.confirm(`Are you sure, You want to delete this?`);

      if (aggree) {
        try {
          const response = await fetch(
            `http://localhost:15000/doctors/${doctor?._id}`,
            {
              method: "DELETE",
            }
          );
          const data = await response.json();
          console.log(data);
          refetch();
        } catch (error) {
          console.log(error.message);
        }
      }
    }
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
                  <button
                    onClick={() => handleDelete(doctor)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
