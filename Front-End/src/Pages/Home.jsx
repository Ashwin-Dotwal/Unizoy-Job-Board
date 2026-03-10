import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Use local backend running on port 5000
    axios
      .get("http://localhost:5000/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="text-center py-12 bg-white shadow">
        <h1 className="text-4xl font-bold mb-2">Find Your Dream Job</h1>
        <p className="text-gray-600">Explore opportunities at Unizoy</p>
      </div>

      {/* Job Grid */}
      <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Home;
