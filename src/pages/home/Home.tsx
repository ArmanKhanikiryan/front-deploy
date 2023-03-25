import React, { useEffect } from "react";
import "./Home.css";
import door from "assets/icons/door.png";
import window from "assets/icons/window.png";
import handrail from "assets/icons/handrail.png";
import slide from "assets/icons/sliding-door.png";
import termo from 'assets/icons/termo.png';
import { useTranslation } from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../features/store";
import {getMainImages} from "../../features/mainSlider/mainSliderSlice";
import NewSlider from "components/newSlider";
import {useNavigate} from "react-router";
import Footer from "../../components/footer";

const Home = () => {
  const { t } = useTranslation();
  const mainSlider = useAppSelector(state => state.mainSlider)
  const dispatch = useAppDispatch()
  useEffect(() => {
      dispatch(getMainImages())
  }, [])
  const navigate = useNavigate()
  return (
    <>
        <div>
          <div className="home_header_wrapper">
            <div className="home_header">
              <div className="header_image_div">
                <div className="icons_wrapper" onClick={() => navigate('/products', {state: 'door-pvc'})}>
                  <img className="header_icons" src={door} alt="door" />
                  <span> {t("Doors")} </span>
                </div>

                <div className="icons_wrapper" onClick={() => navigate('/products', {state: 'window-pvc'})}>
                  <img className="header_icons" src={window} alt="window" />
                  <span> {t("Windows")} </span>
                </div>

                <div className="icons_wrapper" onClick={() => navigate('/products', {state: 'handrails'})}>
                  <img className="header_icons" src={handrail} alt="window" />
                  <span> {t("Handrails")}</span>
                </div>
                <div className="icons_wrapper" onClick={() => navigate('/products', {state: 'slide'})}>
                  <img className="header_icons" src={slide} alt="slide" />
                  <span> {t("Slide")}</span>
                </div>

                <div className="icons_wrapper" onClick={() => navigate('/products', {state: 'termo'})}>
                  <img className="header_icons" src={termo} alt="slide" />
                  <span> {t("Termo")}</span>
                </div>
              </div>
            </div>
          </div>
                <NewSlider/>

          <div className="home_body">
            <div className="location">
              <div className="google_maps_div">
                <div className="location_info">
                  <h1>{t("Our Location")}</h1>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97583.88432469018!2d44.418527930646164!3d40.1535005080101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e0!3m2!1sru!2sam!4v1678887945532!5m2!1sru!2sam"
                    className="google_map"
                    referrerPolicy="no-referrer-when-downgrade"
                    title='Our Location'
                    loading="lazy"
                ></iframe>
            </div>
          </div>
            <Footer/>
        </div>

          </div>

    </>
  );
};

export default Home;
