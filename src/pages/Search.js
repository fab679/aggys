import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { GetUserInfo } from "../features/profiles/user";

function Search(props) {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { loading, hasErrors, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(GetUserInfo(state));
  }, [dispatch, state]);
  if (loading) {
    return <p>Loading</p>;
  }
  if (hasErrors) {
    return <p>An Error Occured</p>;
  }
  return (
    <div className="w-full">
      <NavLink
        to="/"
        className="text-black font-bold text-2xl hover:text-blue-500"
      >
        Home
      </NavLink>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="inline-flex space-x-3 ">
          <p className="text-lg">Name:</p>
          <p className="text-xl font-bold">{user.name}</p>
        </div>
        <div className="inline-flex space-x-3">
          <p className="text-lg ">Occupation:</p>
          <p className="font-semibold text-xl">{user.occupation}</p>
        </div>
        <div className="inline-flex space-x-3">
          <p className="text-lg">Email:</p>
          <p>{user.email}</p>
        </div>
        <div className="inline-flex flex-col w-full items-center justify-center">
          <p className="text-gray-700 text-lg font-bold">Bio</p>
          <p>{user.bio}</p>
        </div>
        <div className="inline-flex space-x-3 mt-1">
          <p className="text-lg ">Joined:</p>
          <p>{user.created_at}</p>
        </div>
        <div className="inline-flex space-x-3">
          <p className="text-lg">Last update:</p>
          <p>{user.updated_at}</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
