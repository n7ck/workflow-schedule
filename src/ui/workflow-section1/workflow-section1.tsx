import { TimeObj } from "../workflow-section4/workflow-section4";
import css from "./css.module.css";

export const WorkflowSection1 = ({
  timeObj,
  totalDays,
  interval,
}: {
  timeObj: TimeObj;
  totalDays: number;
  interval: number;
}) => {
  return (
    <div className={css["workflow-section-1"]}>
      <svg height="42" width="42">
        <circle
          cx="21"
          cy="21"
          r="20"
          stroke="#023e6b"
          strokeWidth="2"
          fill="#a0d4f9"
        />
      </svg>
      <div className={css["title"]}>SCHEDULE YOUR WORKFLOW</div>
      <div className={css["schedule"]}>
        Runs every {interval} days at {timeObj.formattedTime}
        {timeObj.ampm}, <br /> only {totalDays} days a week
      </div>
    </div>
  );
};
