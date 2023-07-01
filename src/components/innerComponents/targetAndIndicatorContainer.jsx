import React, { useEffect, useState, useRef } from "react";
import TargetAndIndicator from "./targetAndIndicator";

function TargetAndIndicatorContainer({
  currentValuePx,
  setCurrentValuePx,
  widthMoovingIndicator,
  targetValue,
  setTargetValue,
  setCurrentValue,
  currentValue,
  widthStaticIndicatorRef,
}) {
  const [targetValuePx, setTargetValuePx] = useState(0);
  const setIntervalRef = useRef();
  const setIntervalRefTwo = useRef();

  if (currentValuePx >= targetValuePx && currentValuePx !== 0) {
    console.log(currentValuePx);
    console.log(setIntervalRef);
    clearInterval(setIntervalRef.current);
    if (!setIntervalRefTwo.current) {
      setIntervalRefTwo.current = setInterval(() => {
        setCurrentValuePx(
          (value) => value + (0.2 * widthMoovingIndicator) / 15
        );
        setCurrentValue((value) => +(value + 0.2).toFixed(1));
        console.log(currentValuePx + "это второй интервал");
      }, 2000);
    }
  }

  if (currentValuePx >= 141) {
    console.log("bketjlgijohldfkdgner");
    clearInterval(setIntervalRefTwo.current);
  }
  useEffect(() => {
    console.log("useEffect");
    console.log("это бесячая ширина...." + widthMoovingIndicator);
    fetch("https://alex.devel.softservice.org/testapi/")
      .then((response) => response.json())
      .then((response) => {
        setTargetValuePx(
          () => (response.balance_usd * widthMoovingIndicator) / 15
        );
        setTargetValue(() => response.balance_usd);
        console.log(setIntervalRef.current);
        if (!setIntervalRef.current) {
          console.log("go int");
          setIntervalRef.current = setInterval(() => {
            console.log("go int 2");
            setCurrentValuePx((value) => value + widthMoovingIndicator / 15);
            setCurrentValue((value) => value + 1);
            console.log(currentValuePx);
          }, 2000);
        }
      })
      .catch((error) =>
        alert(`Запрос выполнился с ошибкой, проблемы с сервером :(`)
      );

    // return () => {
    //   clearInterval(setIntervalRef.current);
    //   clearInterval(setIntervalRefTwo.current);
    // };
  }, []);

  return (
    <div>
      <TargetAndIndicator
        targetValue={targetValue}
        currentValuePx={currentValuePx}
        targetValuePx={targetValuePx}
        widthMoovingIndicator={widthMoovingIndicator}
        currentValue={currentValue}
        widthStaticIndicatorRef={widthStaticIndicatorRef}
      />
    </div>
  );
}

export default TargetAndIndicatorContainer;
