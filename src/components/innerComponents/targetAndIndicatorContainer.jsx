import React, { useEffect, useRef } from "react";
import TargetAndIndicator from "./targetAndIndicator";

function TargetAndIndicatorContainer({
  currentValuePx,
  setCurrentValuePx,
  targetValue,
  setTargetValue,
  setCurrentValue,
  currentValue,
  widthStaticIndicatorRef,
  maxBalance,
}) {
  const setIntervalRef = useRef();
  const setIntervalRefTwo = useRef();
  const moovingIndicatorRef = useRef();

  if (currentValue >= targetValue && currentValue !== 0) {
    clearInterval(setIntervalRef.current);
    if (!setIntervalRefTwo.current) {
      setIntervalRefTwo.current = setInterval(() => {
        setCurrentValuePx(
          (value) => value + (0.2 * moovingIndicatorRef.current) / maxBalance
        );
        setCurrentValue((value) => +(value + 0.2).toFixed(1));
      }, 2000);
    }
  }

  if (currentValuePx >= moovingIndicatorRef.current) {
    clearInterval(setIntervalRefTwo.current);
  }
  useEffect(() => {
    moovingIndicatorRef.current =
      widthStaticIndicatorRef.current.offsetWidth - 9;

    fetch("https://meetroom.speakatalka.com/api/test")
      .then((response) => response.json())
      .then((response) => {
        setTargetValue(() => response.balance_usd);
        if (!setIntervalRef.current) {
          setIntervalRef.current = setInterval(() => {
            console.log("go int 2==" + moovingIndicatorRef.current);
            setCurrentValuePx(
              (value) => value + moovingIndicatorRef.current / maxBalance
            );
            setCurrentValue((value) => value + 1);
          }, 40);
        }
      })
      .catch(() =>
        alert(`Запрос выполнился с ошибкой, проблемы с сервером :(`)
      );
  }, []);

  return (
    <div>
      <TargetAndIndicator
        currentValuePx={currentValuePx}
        currentValue={currentValue}
        widthStaticIndicatorRef={widthStaticIndicatorRef}
        maxBalance={maxBalance}
      />
    </div>
  );
}

export default TargetAndIndicatorContainer;
