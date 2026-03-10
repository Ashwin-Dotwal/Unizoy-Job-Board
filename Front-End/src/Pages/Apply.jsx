import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Apply() {
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    resumeLink: "",
  });

  const submit = async () => {
    await axios.post("http://localhost:5000/applications", {
      ...form,
      jobId: id,
    });

    alert("Application submitted successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for Job</h2>

        <input
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Resume Link"
          onChange={(e) => setForm({ ...form, resumeLink: e.target.value })}
        />

        <button
          onClick={submit}
          className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}

export default Apply;
