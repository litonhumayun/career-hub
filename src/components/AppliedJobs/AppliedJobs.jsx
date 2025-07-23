import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredJobApplications } from "../../utility/localStorage";

const AppliedJobs = () => {
  const [jobsApplied, setJobsApplied] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(jobsApplied);
    } else if (filter === "remote") {
      const remoteJobs = jobsApplied.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = jobsApplied.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplications();
    if (jobs.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobIds.includes(job.id));
      setJobsApplied(appliedJobs);
      setDisplayJobs(appliedJobs);
    }
  }, [jobs]);
  return (
    <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
      <h2>Jobs Applied: {jobsApplied.length}</h2>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-500 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All Jobs</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
        </ul>
      </details>
      {displayJobs.map((job) => (
        <section
          key={job.id}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white shadow-md rounded-lg mb-4"
        >
          <div className="flex items-center justify-center">
            <img src={job.logo} alt="" />
          </div>
          <div>
            <h3 className="btn btn-sm ">{job.job_title}</h3>
            <p>{job.company_name}</p>
            <div className="flex gap-8">
              <p>{job.remote_or_onsite}</p>
              <p>Salary: {job.job_type}</p>
            </div>
            <div className="flex gap-8">
              <p>{job.location}</p>
              <p>Salary: {job.salary}</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-20">
            <button className="btn btn-secondary">View Details</button>
          </div>
        </section>
      ))}
    </section>
  );
};

export default AppliedJobs;
