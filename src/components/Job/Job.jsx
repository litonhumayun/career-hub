import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    title,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm mx-auto">
      <div className="card-body">
        <img src={logo} alt="" className="" />
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{job_title}</div>
        </h2>
        <p>{company_name}</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">{remote_or_onsite}</div>
          <div className="badge badge-outline">{job_type}</div>
        </div>
        <div className="card-actions flex justify-around items-center">
          <div className="flex items-center ">
            <div>
              <FaLocationDot />
            </div>
            <div className="badge">{location}</div>
          </div>
          <div className="flex items-center">
            <div>
              <AiOutlineDollar />
            </div>
            <div className="badge ">{salary}</div>
          </div>
        </div>
        <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
