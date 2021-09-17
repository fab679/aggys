import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { FetchUsers } from "../features/profiles/ProfileSlice";

function HomePage(props) {
  const dispatch = useDispatch();
  const { loading, Errors, users } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);
  if (loading) {
    return <p>Loading</p>;
  }
  if (Errors) {
    return <p>An Error Occured</p>;
  }
  return (
    <div className="p-2">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Occupation</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Bio</th>
          </tr>
        </thead>
        {users?.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      </table>
    </div>
  );
}

export default HomePage;
