import React from "react";
import classes from "./targetAndIndicator.module.less";

function TargetAndIndicator({
  currentValuePx,
  currentValue,
  widthStaticIndicatorRef,
  maxBalance,
}) {
  return (
    <div className={classes.targetAndIndicator}>
      <div
        ref={widthStaticIndicatorRef}
        className={classes.targetAndIndicator__staticIndicator}
      >
        <div
          className={classes.targetAndIndicator__moovingIndicator}
          style={{ width: currentValuePx }}
        ></div>
        {currentValue < maxBalance && (
          <div
            className={classes.targetAndIndicator__targetCursor}
            style={{
              left: currentValuePx - 21,
            }}
          >
            <div
              className={classes.targetAndIndicator__targetCursorTriangle}
            ></div>
            <div className={classes.targetAndIndicator__targetCursorValue}>
              ${currentValue}
            </div>
          </div>
        )}
      </div>

      <div className={classes.targetAndIndicator__targetBox}>
        <div
          className={classes.targetAndIndicator__smallPartTargetBox}
          style={{
            backgroundColor: currentValue >= maxBalance ? "#00A910" : "",
          }}
        >
          Target
        </div>
        <div
          className={classes.targetAndIndicator__largePartTargetBox}
          style={{
            background: currentValue >= maxBalance ? "#00A910" : "",
          }}
        >
          {maxBalance}$
        </div>
      </div>
    </div>
  );
}

export default TargetAndIndicator;
