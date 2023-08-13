import { useState } from "react";
import { WorkflowDescription } from "../workflow-description/workflow-description";
import css from "./css.module.css";

export const WorkflowSection2 = ({
  interval,
  setInterval,
}: {
  interval: number;
  setInterval: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [notChangable, setNotChangable] = useState(true);
  const title = "Interval";
  const description = "How often the workflow should run";

  return (
    <div className={css["workflow-section-2"]}>
      <WorkflowDescription title={title} description={description} />
      <div className={css["flex"]}>
        <div className={css["flex-end"]}>
          {notChangable ? (
            <span className={css["interval-div"]}>{interval}</span>
          ) : (
            <input
              type="tel"
              disabled={notChangable}
              className={css["interval-input"]}
              value={interval || ""}
              onChange={(e) => {
                const value = e.target.value;
                if (value) {
                  setInterval(parseInt(value));
                } else {
                  setInterval(0);
                }
              }}
            />
          )}
          <span className={css["days"]}> Days</span>
        </div>
        <button
          className={notChangable ? "" : css["active"]}
          onClick={() => {
            setNotChangable(!notChangable);
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
};
