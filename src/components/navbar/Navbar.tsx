import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router";
import LanguageSelector from "../languageSelector";
import Menu from "../menu";
import NavbarAccordion from "./navbarAccordion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();


  return (
    <div className="navbar_wrapper">
      <div className="navbar">
        <img
          className="logo"
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
        />
        <div className="nav_container">
          <div className="ul_container">
            <div className="home_btn">
              <span className="dropdown_span" onClick={() => navigate("/")}>
                {t("Home")}
              </span>
            </div>
            <div className="dropdown_component">
              <span
                className="dropdown_span"
                onClick={() => navigate("/products", {state: 'all-alumin'})}
              >
                {t("Products")}
              </span>

              <div className="dropdown_products">
                <div
                    onClick={() => navigate("/products", {state: 'aluminium'})}
                  className="dropdown_element"
                >
                  <span>{t("Aluminium Profiles")}</span>
                </div>

                <div
                    onClick={() => navigate("/products", {state:'metal-plastic'})}
                  className="dropdown_element"
                >
                  <span>{t("Metal-Plastic UPVC")}</span>
                </div>

                <div
                  onClick={() => navigate("/products", {state: 'glass'})}
                  className="dropdown_element"
                >
                  <span>{t('Glass Constructions')}</span>
                </div>

                <div
                  onClick={() => navigate("/products", {state: 'blinds'})}
                  className="dropdown_element"
                >
                  <span>{t("Remote Controlled Blinds")}</span>
                </div>

                <div
                  onClick={() => navigate("/products", {state: "automatic"})}
                  className="dropdown_element"
                >
                  <span>{t("Automatic Sliding Door")}</span>
                </div>

                <div
                    onClick={() => navigate("/products", {state: "handrails"})}
                    className="dropdown_element"
                >
                  <span>{t("Handrails")}</span>
                </div>

                <div
                  onClick={() => navigate("/products", {state: "glass-shower"})}
                  className="dropdown_element"
                >
                  <span>{t("Shower Enclosures")}</span>
                </div>

                <div
                  onClick={() => navigate("/products", {state: 'facade'})}
                  className="dropdown_element"
                >
                  <span>{t("Facade Constructions")}</span>
                </div>
              </div>

            </div>
            <div className="dropdown_component">
              <span
                className="dropdown_span"
                onClick={() => navigate("/service")}
              >
                {t("Service")}
              </span>


              <div className="dropdown">

                <div
                  onClick={() => navigate("/service/measurement")}
                  className="dropdown_element"
                >
                  <span> {t('Free Measurement')} </span>
                </div>

                <div
                  onClick={() => navigate("/service/consultation")}
                  className="dropdown_element"
                >
                  <span> {t("Free Consultation")} </span>
                </div>

                <div
                  onClick={() => navigate("/service/installation")}
                  className="dropdown_element"
                >
                  <span>{t("Free Installation")} </span>
                </div>

                <div
                    onClick={() => navigate("/service/warranty")}
                    className="dropdown_element"
                >
                  <span> {t("One Year Warranty Service")}</span>
                </div>



              </div>
            </div>

            <div className='dropdown_component'>

              <span
                  className="dropdown_span"
                  onClick={() => navigate("/about-us")}
              >
                {t("About Us")}
              </span>


              <div className='dropdown_about'>
                <div
                    onClick={() => navigate("/about-us/portfolio")}
                    className="dropdown_element"
                >
                  <span> {t("Our Works")} </span>
                </div>
                <div
                    onClick={() => navigate("/about-us/our-company")}
                    className="dropdown_element"
                >
                  <span> {t('Our Company')}</span>
                </div>
              </div>
            </div>




          </div>
          <Menu />
        </div>
      </div>

      <div className="change_language_wrapper">
        <div className="change_language">
          <div className="contact">
            <div className="contact_container">
              <NavbarAccordion />
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
