import React, { useEffect, useRef } from "react";
import classes from "./targetAndIndicator.module.less";

function TargetAndIndicator({
  currentValuePx,
  widthMoovingIndicator,
  currentValue,
  widthStaticIndicatorRef,
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
        {currentValuePx < widthMoovingIndicator && (
          <div
            className={classes.targetAndIndicator__targetCursor}
            style={{
              left:
                currentValue < 10
                  ? currentValuePx - 5
                  : currentValue >= 10 && currentValue <= 14
                  ? currentValuePx - 10
                  : currentValuePx - 15,
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
            backgroundColor:
              currentValuePx >= widthMoovingIndicator ? "#00A910" : "",
          }}
        >
          Target
        </div>
        <div
          className={classes.targetAndIndicator__largePartTargetBox}
          style={{
            background:
              currentValuePx >= widthMoovingIndicator ? "#00A910" : "",
          }}
        >
          15$
        </div>
      </div>
    </div>
  );
}

export default TargetAndIndicator;
