import { CheckboxBtn } from "../checkbox-btn/checkbox-btn";
import { WorkflowDescription } from "../workflow-description/workflow-description";
import css from "./css.module.css";

export const WorkflowSection3 = () => {
  const title = "Days";
  const description = "The days of the week it is active";
  const name = "days-of-the-week";
  return (
    <div className={css["workflow-section-3"]}>
      <WorkflowDescription title={title} description={description} />
      <div className={css["flex-days"]}>
        <CheckboxBtn id="day-sunday" label="Sun" name={name} checked={true} />
        <CheckboxBtn id="day-monday" label="Mon" name={name} checked={true} />
        <CheckboxBtn id="day-tuesday" label="Tue" name={name} checked={true} />
        <CheckboxBtn id="day-wednesday" label="Wed" name={name} />
        <CheckboxBtn id="day-thursday" label="Thu" name={name} />
        <CheckboxBtn id="day-friday" label="Fri" name={name} />
        <CheckboxBtn id="day-saturday" label="Sat" name={name} />
      </div>
    </div>
  );
};
