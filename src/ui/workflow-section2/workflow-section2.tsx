import { WorkflowDescription } from "../workflow-description/workflow-description";
import css from "./css.module.css";

export const WorkflowSection2 = () => {
  const title = "Interval";
  const description = "How often the workflow should run";
  return (
    <div className={css["workflow-section-2"]}>
      <WorkflowDescription title={title} description={description} />
      <div className={css["flex"]}>
        <div className={css["flex-end"]}>
          <span className={css["interval"]}>3</span>
          <span className={css["days"]}> Days</span>
        </div>
        <button>Change</button>
      </div>
    </div>
  );
};
