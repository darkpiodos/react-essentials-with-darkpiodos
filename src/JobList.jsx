import React from "react";
import PropTypes from "prop-types";
const JobList = (props) => {
  const category = props.category;
  const jobList = props.items;
  const jobListItems = jobList.map((job) => (
    <li key={job.id}>
      {job.department}&nbsp;
      {job.role}&nbsp;
      <b style={{ color: "yellowgreen" }}> {job.salary}&nbsp;</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{jobListItems}</ul>
    </>
  );
};
JobList.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      department: PropTypes.string,
      role: PropTypes.string,
      salary: PropTypes.number,
    })
  ),
};
JobList.defaultProps = {
  category: "Category",
  items: [],
};
export default JobList;
