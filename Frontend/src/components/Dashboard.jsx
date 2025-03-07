import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post;
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id} className="border p-3 my-2">
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
