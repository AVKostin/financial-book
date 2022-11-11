import { NavLink } from 'react-router-dom';
import s from './ToGoReport.module.css';

const ToGoReport = () => {
  return (
    <div className={s.toGoReport}>
      <NavLink to="/reports" className={s.link}>
        <p>
          Reports
          <svg
            className={s.svg}
            width="14"
            height="14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.2h3V14H0V4.2ZM5.6 0h2.8v14H5.6V0Zm5.6 8H14v6h-2.8V8Z"
              fill="#52555F"
            />
          </svg>
        </p>
      </NavLink>
    </div>
  );
};

export default ToGoReport;
