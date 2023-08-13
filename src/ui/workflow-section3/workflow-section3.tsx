import { ReactNode } from "react";
import { WorkflowDescription } from "../workflow-description/workflow-description";
import css from "./css.module.css";

export const WorkflowSection3 = ({ children }: { children: ReactNode }) => {
  const title = "Days";
  const description = "The days of the week it is active";
  return (
    <div className={css["workflow-section-3"]}>
      <WorkflowDescription title={title} description={description} />
      <div className={css["flex-days"]}>{children}</div>
    </div>
  );
};
