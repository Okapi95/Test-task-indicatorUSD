import React, { useState, useRef } from "react";
import ApplicationContent from "./applicationContent";

function ApplicationContentContainer() {
  const [currentValuePx, setCurrentValuePx] = useState(0);
  const [targetValue, setTargetValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const widthStaticIndicatorRef = useRef(null);

  return (
    <ApplicationContent
      currentValuePx={currentValuePx}
      setCurrentValuePx={setCurrentValuePx}
      widthStaticIndicatorRef={widthStaticIndicatorRef}
      targetValue={targetValue}
      setTargetValue={setTargetValue}
      currentValue={currentValue}
      setCurrentValue={setCurrentValue}
    />
  );
}

export default ApplicationContentContainer;
