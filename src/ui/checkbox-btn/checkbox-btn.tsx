import css from "./css.module.css";

export interface CheckboxData {
  id: string;
  label: string;
  dayName: string;
  checked: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CheckboxBtn = ({
  id,
  label,
  dayName,
  checked,
  setSelected,
}: CheckboxData) => {
  return (
    <div className={css["checkbox-btn"]}>
      <input
        className={css["input"]}
        type="checkbox"
        id={id}
        value={id}
        name={dayName}
        defaultChecked={checked}
        onChange={() => setSelected(!checked)}
      />
      <label htmlFor={id}>
        <div>{label}</div>
      </label>
    </div>
  );
};
