import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 border">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{job.title}</h2>

      <p className="text-gray-600 mb-3">{job.description}</p>

      <p className="text-gray-500 mb-5">📍 {job.location}</p>

      <Link
        to={`/apply/${job._id}`}
        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Apply Now
      </Link>
    </div>
  );
}

export default JobCard;
