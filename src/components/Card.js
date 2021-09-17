import React from "react";
import { NavLink } from "react-router-dom";

function Card({ user }) {
  return (
    <tbody>
      <tr className="border">
        <td className="border p-2 hover:text-blue-500">
          <NavLink
            to={{
              pathname: `user/${user.id}`,
              state: user.id,
            }}
          >
            {user.name}
          </NavLink>
        </td>
        <td className="border p-2">{user.occupation}</td>
        <td className="border p-2">{user.email}</td>
        <td className="border p-2">{user.bio}</td>
      </tr>
    </tbody>
  );
}

export default Card;
