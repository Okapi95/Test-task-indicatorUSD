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
    console.log("выполнилось ли вообще условие7 - да");
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
  console.log("это бесячая ширина...." + widthMoovingIndicator); //здесь она равна 141
  useEffect(() => {
    console.log("useEffect");
    console.log("это бесячая ширина в юзэффекте...." + widthMoovingIndicator); //здесь она равна 0
    fetch("https://meetroom.speakatalka.com/api/test")
      .then((response) => response.json())
      .then((response) => {
        setTargetValuePx(
          () => (response.balance_usd * widthMoovingIndicator) / 15 //здесь она равна 0
        );
        setTargetValue(() => response.balance_usd);
        console.log(setIntervalRef.current);
        if (!setIntervalRef.current) {
          console.log("go int");
          setIntervalRef.current = setInterval(() => {
            console.log("go int 2");
            console.log("go int 2==" + widthMoovingIndicator);
            setCurrentValuePx((value) => value + widthMoovingIndicator / 15); //здесь она равна 0
            setCurrentValue((value) => value + 1);
          }, 1000);
        }
      })
      .catch((error) =>
        alert(`Запрос выполнился с ошибкой, проблемы с сервером :(`)
      );
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
