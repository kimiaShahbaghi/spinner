import { useEffect} from "react";
import { useDispatch } from 'react-redux'
import Button from "../../components/button/Button";
import MyWheel from '../../components/wheel/Wheel'
import { getDataFetch } from "../../redux/actions";
import "./index.scss";

const Wheel = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFetch());
  }, );


  return (
    <div className="app">
      <MyWheel/>
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
