import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../features/store";
import {useDispatch} from "react-redux";
import {getMainImages} from "../../features/mainSlider/mainSliderSlice";
import NewSlider from "../../components/newSlider";
import Footer from "../../components/footer";

const Service = () => {

    const state = useAppSelector(state1 => state1.mainSlider)
    const dispatch = useAppDispatch()

    useEffect(( ) => {
        dispatch(getMainImages())
    })
    return (
        <div style={{marginTop: '50px'}}>
            <NewSlider imagesArray={state}/>
            <Footer/>
        </div>
    );
};

export default Service;