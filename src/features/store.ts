import {configureStore} from "@reduxjs/toolkit";
import mainSlider from "./mainSlider/mainSliderSlice"
import arplasSlicer from "./arplas/arplasSlicer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import aluminiumSlice from "./aluminiumSlice/aluminiumSlice";
import glassSlice from "./glassSlice/glassSlice";
import handrailsSlice from "./handrailSlice/handrailsSlice";
import automaticSlide from "./automaticSlice/automaticSlide";
import blindsSlice from "./blindsSlice/blindsSlice";

const store = configureStore({
    reducer: {
        mainSlider: mainSlider,
        arplas: arplasSlicer,
        aluminium: aluminiumSlice,
        glass: glassSlice,
        handrail: handrailsSlice,
        automatic: automaticSlide,
        blinds: blindsSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => TDispatch = useDispatch;

export default store;