import Dashboard from "./components/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProjects from "./components/AllProjects";
import Chat from "./components/Chat";
import MyTeam from "./components/MyTeam";
import ManageRole from "./components/ManageRole";
import MyTickets from "./components/MyTickets";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="AllProjects" element={<AllProjects />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="MyTeam" element={<MyTeam />} />
        <Route path="ManageRole" element={<ManageRole />} />
        <Route path="MyTickets" element={<MyTickets />} />
      </Routes>
    </div>
  );
}

export default App;
