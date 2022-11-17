import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:15000/users`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data.data;
    },
  });

  const handleMakeAdmin = (id) => {
    const updateAdminRole = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/users/admin/${id}`,
          {
            method: "PUT",
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();
        if (data.success) {
          toast.success("Admin Access granted");
          refetch();
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    updateAdminRole();
  };

  return (
    <section>
      <h1 className="text-xl">All Users</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user.role !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(user?._id)}
                        className="btn btn-accent btn-xs"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-danger btn-xs">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
