import { useSelector } from "react-redux";
import Wheel from "./pages/wheel/index";
import NetworkErrorPage from "./pages/networkError/index";
import FixPage from "./pages/fix/index";
import { selectError } from "./redux/wheelSlice";
import "./App.scss";

function App() {
  const networkError = useSelector(selectError);
  return (
    <div className="App">
      {networkError ? <NetworkErrorPage /> : <Wheel />}
      {/* <FixPage /> */}
    </div>
  );
}

export default App;
