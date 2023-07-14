import React, { useState, useRef } from "react";
import ApplicationContent from "./applicationContent";

function ApplicationContentContainer() {
  const [currentValuePx, setCurrentValuePx] = useState(0);
  const [targetValue, setTargetValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const widthStaticIndicatorRef = useRef(null);

  const props = {
    currentValuePx,
    setCurrentValuePx,
    widthStaticIndicatorRef,
    targetValue,
    setTargetValue,
    currentValue,
    setCurrentValue,
  };

  return <ApplicationContent {...props} />;
}

export default ApplicationContentContainer;
