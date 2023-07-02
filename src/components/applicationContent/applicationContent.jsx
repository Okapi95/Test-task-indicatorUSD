import React from "react";
import classes from "./applicationContent.module.less";
import iconInfoSvg from "../../icons/iconInfo.svg";
import TargetAndIndicatorContainer from "../innerComponents/targetAndIndicatorContainer";

function ApplicationContent({
  currentValuePx,
  setCurrentValuePx,
  targetValue,
  setTargetValue,
  currentValue,
  setCurrentValue,
  widthStaticIndicatorRef,
}) {
  const maxBalance = 15;
  return (
    <section className={classes.applicationContent}>
      <h1 className={classes.applicationContent__header}>
        Target Indicator Demo
      </h1>
      <div className={classes.applicationContent__backgroundBlock}>
        <div className={classes.applicationContent__targetIndicatorShell}>
          <div className={classes.applicationContent__targetIndicatorBlock}>
            <div className={classes.applicationContent__reached}>Reached:</div>
            <TargetAndIndicatorContainer
              currentValuePx={currentValuePx}
              setCurrentValuePx={setCurrentValuePx}
              targetValue={targetValue}
              setTargetValue={setTargetValue}
              setCurrentValue={setCurrentValue}
              currentValue={currentValue}
              widthStaticIndicatorRef={widthStaticIndicatorRef}
              maxBalance={maxBalance}
            />
          </div>
          <div className={classes.applicationContent__noticeBlock}>
            <img
              src={iconInfoSvg}
              alt="iconInfo"
              style={{ width: "25px", height: "25px" }}
            />
            <div className={classes.applicationContent__notice}>
              {currentValue < maxBalance
                ? `You need $${(maxBalance - currentValue).toFixed(
                    currentValue <= targetValue
                      ? 0
                      : !(currentValue % 1 === 0)
                      ? 1
                      : 0
                  )} more to reach your target.`
                : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationContent;
