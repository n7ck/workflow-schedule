import { useState } from "react";
import css from "./css.module.css";
import { NextSection } from "../../ui/next-section/next-section";
import { WorkflowSection1 } from "../workflow-section1/workflow-section1";
import { WorkflowSection2 } from "../workflow-section2/workflow-section2";
import { WorkflowSection3 } from "../workflow-section3/workflow-section3";
import {
  TimeObj,
  WorkflowSection4,
} from "../workflow-section4/workflow-section4";
import { CheckboxBtn, CheckboxData } from "../checkbox-btn/checkbox-btn";

export const MainContainer = () => {
  const [time, setTime] = useState(25);
  const [interval, setInterval] = useState(3);
  const [day1, setDay1] = useState(true);
  const [day2, setDay2] = useState(true);
  const [day3, setDay3] = useState(true);
  const [day4, setDay4] = useState(true);
  const [day5, setDay5] = useState(false);
  const [day6, setDay6] = useState(false);
  const [day7, setDay7] = useState(false);

  const dayValues = [day1, day2, day3, day4, day5, day6, day7];
  const totalDays = dayValues.filter((dayTrue) => dayTrue).length;

  const timeObj: TimeObj = (() => {
    const hours = Math.floor(time / 4);
    const minutes = ((time % 4) * 15).toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedTime = `${hours % 12 || 12}:${minutes}`;
    return {
      time,
      ampm,
      formattedTime,
    };
  })();

  const dayName: string = "days-of-the-week";
  const sevenDays: CheckboxData[] = [
    {
      id: "day-sunday",
      label: "Sun",
      dayName: dayName,
      checked: dayValues[0],
      setSelected: setDay1,
    },
    {
      id: "day-monday",
      label: "Mon",
      dayName: dayName,
      checked: dayValues[1],
      setSelected: setDay2,
    },
    {
      id: "day-tuesday",
      label: "Tue",
      dayName: dayName,
      checked: dayValues[2],
      setSelected: setDay3,
    },
    {
      id: "day-wednesday",
      label: "Wed",
      dayName: dayName,
      checked: dayValues[3],
      setSelected: setDay4,
    },
    {
      id: "day-thursday",
      label: "Thu",
      dayName: dayName,
      checked: dayValues[4],
      setSelected: setDay5,
    },
    {
      id: "day-friday",
      label: "Fri",
      dayName: dayName,
      checked: dayValues[5],
      setSelected: setDay6,
    },
    {
      id: "day-saturday",
      label: "Sat",
      dayName: dayName,
      checked: dayValues[6],
      setSelected: setDay7,
    },
  ];

  return (
    <div className={css["main-container"]}>
      <div className={css["workflow"]}>
        <WorkflowSection1
          timeObj={timeObj}
          totalDays={totalDays}
          interval={interval}
        />
        <WorkflowSection2 interval={interval} setInterval={setInterval} />
        <WorkflowSection3>
          {sevenDays.map((day) => (
            <CheckboxBtn {...day} key={day.id} />
          ))}
        </WorkflowSection3>
        <WorkflowSection4 timeObj={timeObj} setTime={setTime} />
      </div>
      <NextSection />
    </div>
  );
};
