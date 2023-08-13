import css from "./css.module.css";

export const CheckboxBtn = ({
  id,
  label,
  name,
  checked,
}: {
  id: string;
  label: string;
  name: string;
  checked?: boolean;
}) => {
  return (
    <div className={css["checkbox-btn"]}>
      <input
        className={css["input"]}
        type="checkbox"
        id={id}
        value={id}
        name={name}
        defaultChecked={checked}
      />
      <label htmlFor={id}>
        <div>{label}</div>
      </label>
    </div>
  );
};
