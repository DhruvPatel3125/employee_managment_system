import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import Alltask from "../Others/Alltask";

const AdminDashboard = ({ changeUser, data }) => {
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={changeUser} data={data} />
      <CreateTask />
      <Alltask />
    </div>
  );
};


export default AdminDashboard;
