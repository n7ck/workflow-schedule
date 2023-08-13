import css from "./css.module.css";

export const WorkflowDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className={css["workflow-description"]}>
      <div className={css["title"]}>{title}</div>
      <div className={css["description"]}>{description}</div>
    </div>
  );
};
