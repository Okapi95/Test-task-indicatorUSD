import React, { useState, useRef, useEffect } from "react";
import ApplicationContent from "./applicationContent";

function ApplicationContentContainer() {
  const [currentValuePx, setCurrentValuePx] = useState(0);
  const [targetValue, setTargetValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const widthStaticIndicatorRef = useRef(null);
  const [widthMoovingIndicator, setWidthMoovingIndicator] = useState(0);

  useEffect(() => {
    const widthStaticIndicator = widthStaticIndicatorRef.current.offsetWidth;
    console.log("ширина серой" + widthStaticIndicator);
    const interimWidthMoovingIndicator = widthStaticIndicator - 9;
    console.log("ширина голубой" + interimWidthMoovingIndicator);
    setWidthMoovingIndicator(interimWidthMoovingIndicator);
  }, []);
  console.log("ширина голубой вне эффекта" + widthMoovingIndicator);
  return (
    <ApplicationContent
      currentValuePx={currentValuePx}
      setCurrentValuePx={setCurrentValuePx}
      widthMoovingIndicator={widthMoovingIndicator}
      widthStaticIndicatorRef={widthStaticIndicatorRef}
      targetValue={targetValue}
      setTargetValue={setTargetValue}
      currentValue={currentValue}
      setCurrentValue={setCurrentValue}
    />
  );
}

export default ApplicationContentContainer;
