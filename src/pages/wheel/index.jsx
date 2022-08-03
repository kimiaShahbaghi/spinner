import { useEffect} from "react";
import { useDispatch } from 'react-redux'
import Button from "../../components/button/Button";
import ChanceWheel from "../../components/wheel/ChanceWheel";
import { getDataFetch } from "../../redux/actions";
import "./index.scss";

const Wheel = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFetch());
  }, );

  return (
    <div className="app">
      <ChanceWheel list={[1, 2, 3, 4, 5, 6]} />
      <div className="app__content">
        <h4> شانس خود را انتخاب کنید</h4>
        <p>
          گردونه شانس را بچرخانید و بسته یک روزه اینترنت همراه اول جایزه بگیرید{" "}
        </p>
      </div>
      <Button />
    </div>
  );
};

export default Wheel;
