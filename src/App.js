import classes from "./App.module.css";
import ApplicationContentContainer from "./components/applicationContent/applicationContentContainer";

function App() {
  return (
    <div className={classes.app}>
      <ApplicationContentContainer />
    </div>
  );
}

export default App;
