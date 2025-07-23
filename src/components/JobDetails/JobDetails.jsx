import { useLoaderData, useParams } from "react-router-dom"; // ✅ FIX: use `react-router-dom`
import { ToastContainer, toast } from "react-toastify";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  const handleApplyJob = () => {
    saveJobApplication(id);
    toast("Your application has been saved!");
  };

  if (!job) {
    return (
      <p className="text-center mt-10 text-xl text-red-500">Job not found</p>
    );
  }

  return (
    <section className="bg-gray-100 text-gray-800 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 mt-10">
        Job Details
      </h2>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2/3 */}
        <div className="lg:col-span-2 bg-white rounded shadow p-6 space-y-4">
          <h3 className="text-2xl font-semibold">{job.job_title}</h3>
          <p className="text-gray-700">
            <strong> Job Description:</strong> {job.job_description}
          </p>
          <p>
            <strong>Job Responsibilities:</strong> {job.job_responsibility}
          </p>
          <p>
            <strong>Educational Requirements:</strong>{" "}
            {job.educational_requirements}
          </p>
          <p>
            <strong>Experiences:</strong> {job.experiences}
          </p>
        </div>

        {/* Sidebar - 1/3 */}
        <div className="bg-white rounded shadow p-6 space-y-4">
          <h4 className="text-xl font-semibold mb-2">Job Details</h4>
          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Job Type:</strong> {job.job_type}
          </p>

          <h4 className="text-xl font-semibold mt-4 mb-2">
            Contact Information
          </h4>
          <p>
            <strong>Phone:</strong> {job.contact_information?.phone}
          </p>
          <p>
            <strong>Email:</strong> {job.contact_information?.email}
          </p>
          <p>
            <strong>Address:</strong> {job.contact_information?.address}
          </p>

          <button
            onClick={handleApplyJob}
            className="w-full mt-4 bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded"
          >
            Apply Now
          </button>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
