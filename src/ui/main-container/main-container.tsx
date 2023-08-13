import { ReactNode } from "react";
import css from "./css.module.css";
import { NextSection } from "../../ui/next-section/next-section";

export const MainContainer = ({ children }: { children?: ReactNode }) => {
  return (
    <div className={css["main-container"]}>
      <div className={css["workflow"]}>{children}</div>
      <NextSection />
    </div>
  );
};
