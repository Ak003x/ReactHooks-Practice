import React from "react";
import User from "./user";

function Users({ theme }) {
  return (
    <div>
      <h1>Users</h1>
      <User theme={theme} />
    </div>
  );
}

export default Users;
