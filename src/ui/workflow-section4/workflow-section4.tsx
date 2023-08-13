import { useState } from "react";
import { WorkflowDescription } from "../workflow-description/workflow-description";
import css from "./css.module.css";

export const WorkflowSection4 = () => {
  const title = "Time";
  const description = "Which part of the day to run";

  const [time, setTime] = useState(25);
  const hours = Math.floor(time / 4);
  const minutes = ((time % 4) * 15).toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  return (
    <div className={css["workflow-section-4"]}>
      <WorkflowDescription title={title} description={description} />
      <div className={css["flex"]}>
        <div className={css["flex-end"]}>
          <span className={css["time"]}>
            {hours % 12 || 12}:{minutes}
          </span>
          <span className={css["ampm"]}> {ampm}</span>
        </div>
        <button>Remove</button>
      </div>
      <input
        type="range"
        min="0"
        max="95"
        value={time}
        className={css["slider"]}
        onChange={(e) => setTime(parseInt(e.target.value, 10))}
      ></input>
    </div>
  );
};
