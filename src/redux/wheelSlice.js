import { createSlice } from "@reduxjs/toolkit";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const initialState = {
  title: "شانس خود را امتحان کنید!",
  description:
    "گردونه شانس را بچرخانید و بسته یک روزه اینترنت همراه اول جایزه بگیرید.",
  prizes: [
    {
      id: 1,
      image:
        "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gifts.svg",
      title: "3 گیگابایتی",
    },
    {
      id: 2,
      image:
        "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gift1s.svg",
      title: "5 گیگابایتی",
    },
    {
      id: 3,
      image:
        "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gift2s.svg",
      title: "10 گیگابایتی",
    },
    {
      id: 4,
      image:
        "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gift3s.svg",
      title: "20 گیگابایتی",
    },
    {
      id: 5,
      image:
        "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gift4s.svg",
      title: "50 گیگابایتی",
    },
    {
      id: 6,
      image:
        "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gift5s.svg",
      title: "100 گیگابایتی",
    },
  ],

  isValid: true,
  rotate: 0,
  prizeIndex: undefined,
  buttonText: "چرخاندن گردونه",
  spinned: false,
};
const wheelSlice = createSlice({
  name: "wheel",
  initialState,
  reducers: {
    setPrize: (state, action) => {
      state.prizes = action.payload.prizes;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
    setValid: (state, action) => {
      state.isValid = action.payload;
    },
    setRotate: (state, action) => {
      state.rotate = (18 - action.payload) * 60;
      state.prizeIndex = action.payload;
      state.buttonText = "...";
      state.isValid = false;
      console.log('from set rotate : prixeIndex', state.prizeIndex)
    },
    setPrizeIndex: (state, action) => {
      console.log('from slice', state.prizes[state.prizeIndex].title);
      state.title = `بسته ${state.prizes[state.prizeIndex].title} اینترنت همراه اول`
      state.description =
        "تبریک!شما برنده شدید. تا لحظاتی دیگر پیامک فعال سازی بسته برای شما ارسال خواهد شد.";
      state.buttonText = "متوجه شدم";
    },
  },
});

export const selectPrizes = (state) => state.wheelReducer.prizes;
export const selectTitle = (state) => state.wheelReducer.title;
export const selectDescription = (state) => state.wheelReducer.description;
export const selecButtonText = (state) => state.wheelReducer.buttonText;
export const selectValid = (state) => state.wheelReducer.isValid;
export const selectRotate = (state) => state.wheelReducer.rotate;
export const selectPrizeIndex = (state) => state.wheelReducer.prizeIndex;

export const { setPrize, setValid, setPrizeIndex, setRotate } =
  wheelSlice.actions;

export default wheelSlice.reducer;

// ${state.prizes[state.prizeIndex].title}

// `baste internet ${
//   state.prizes[state.prizeIndex].title
// } hamrah aval`;

