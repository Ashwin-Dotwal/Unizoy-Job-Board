import { useState } from "react";
import axios from "axios";

function Admin() {
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
  });

  const submit = async () => {
    await axios.post("http://localhost:5000/jobs", job);

    alert("Job posted successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Post New Job</h2>

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Job Title"
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        />

        <textarea
          className="w-full border p-3 rounded mb-4"
          placeholder="Job Description"
          onChange={(e) => setJob({ ...job, description: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Location"
          onChange={(e) => setJob({ ...job, location: e.target.value })}
        />

        <button
          onClick={submit}
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
        >
          Post Job
        </button>
      </div>
    </div>
  );
}

export default Admin;
