import css from "./css.module.css";
import { ReactNode } from "react";

export const Background = ({ children }: { children?: ReactNode }) => {
  return <div className={css["background"]}>{children}</div>;
};
