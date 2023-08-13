import { WorkflowDescription } from "../workflow-description/workflow-description";
import css from "./css.module.css";

export interface TimeObj {
  time: number;
  ampm: string;
  formattedTime: string;
}

export const WorkflowSection4 = ({
  timeObj,
  setTime,
}: {
  timeObj: TimeObj;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const title = "Time";
  const description = "Which part of the day to run";

  return (
    <div className={css["workflow-section-4"]}>
      <WorkflowDescription title={title} description={description} />
      <div className={css["flex"]}>
        <div className={css["flex-end"]}>
          <span className={css["time"]}>{timeObj.formattedTime}</span>
          <span className={css["ampm"]}> {timeObj.ampm}</span>
        </div>
        <button>Remove</button>
      </div>
      <input
        type="range"
        min="0"
        max="95"
        value={timeObj.time}
        className={css["slider"]}
        onChange={(e) => setTime(parseInt(e.target.value, 10))}
      ></input>
    </div>
  );
};
