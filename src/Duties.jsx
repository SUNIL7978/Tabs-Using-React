import { FaAngleDoubleRight } from 'react-icons/fa';
const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((item, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
