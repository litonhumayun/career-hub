import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { Helmet } from "react-helmet-async";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <>
      <Helmet>
        <title>Featued Jobs</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-5xl bold py-5">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto max-w-7xl my-10 p-4">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button
          className="btn btn-primary"
          onClick={() => setDataLength(jobs.length)}
        >
          See All Jobs
        </button>
      </div>
    </>
  );
};

export default FeaturedJobs;
