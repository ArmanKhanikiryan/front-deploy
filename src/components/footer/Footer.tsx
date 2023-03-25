import React from "react";
import "./Footer.css";
import copyright from 'assets/icons/copyright.png'
import instagram from 'assets/icons/instagram.svg'
import facebook from 'assets/icons/facebook.svg'
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const {t} = useTranslation()
    const navigate = useNavigate()

    return (
        <>

       <div className='footer_wrapper'>


           <div className='footer_body'>

                   <div className="body_parts">
                       <h2 onClick={() => navigate("/products", {state: 'all-alumin'})}>{t("Products")}</h2>
                       <span onClick={() => navigate('/products', {state: 'door-pvc'})}>{t("Doors")}</span>
                       <span onClick={() => navigate('/products', {state: 'window-pvc'})}>{t("Windows")}</span>
                       <span onClick={() => navigate('/products', {state: 'handrails'})}>{t("Handrails")}</span>
                       <span onClick={() => navigate('/products', {state: 'slide'})}>{t("Slide")}</span>
                       <span onClick={() => navigate('/products', {state: 'termo'})}>{t("Termo")}</span>
                   </div>

                   <div className="body_parts">
                       <h2>{t("Service")}</h2>
                       <span>{t("Measurement")}</span>
                       <span>{t("Installation")}</span>
                       <span>{t("Consultation")}</span>
                       <span>{t("Warranty")}</span>
                   </div>

                   <div className="body_parts">
                       <h2>{t("About Us")}</h2>
                       <span>{t("Our Company")}</span>
                       <span>{t("Our Works")}</span>
                   </div>

               <div className="body_parts">
                       <h2 style={{fontWeight: '500'}}>{t("Contact Info")}</h2>
                       <span>info.proffsystem@gmail.com</span>
                       <span>+37491374520</span>
                       <span>+37495778844</span>

               </div>
           </div>




           <div className="copy_right_wrapper">
           <div className='copy_right'>
               <img src={copyright} width='15' height='15' alt="copyright"/>
               <span>Copyright {currentYear} ProffSystem, All Rights Reserved</span>
           </div>

               <div className='social_networks'>
                   <img className='social_network_item' src={instagram} alt="instagram"/>
                   <img className='social_network_item' src={facebook} alt=""/>
               </div>
           </div>
       </div>

            <div className='mobile_footer'>




                <div className='mobile_part1'>

                    <div className='mobile_body_parts'>
                        <h3 onClick={() => navigate("/products", {state: 'all-alumin'})}>{t("Products")}</h3>
                        <span onClick={() => navigate('/products', {state: 'door-pvc'})}>{t("Doors")}</span>
                        <span onClick={() => navigate('/products', {state: 'window-pvc'})}>{t("Windows")}</span>
                        <span onClick={() => navigate('/products', {state: 'handrails'})}>{t("Handrails")}</span>
                        <span onClick={() => navigate('/products', {state: 'slide'})}>{t("Slide")}</span>
                        <span onClick={() => navigate('/products', {state: 'termo'})}>{t("Termo")}</span>
                    </div>

                    <div className='mobile_body_parts'>
                        <h3>{t("Service")}</h3>
                        <span>{t("Measurement")}</span>
                        <span>{t("Installation")}</span>
                        <span>{t("Consultation")}</span>
                        <span>{t("Warranty")}</span>
                    </div>

                </div>
                <div className='mobile_part1'>



                    <div className='mobile_body_parts'>
                        <h3>{t("Contact Info")}</h3>
                        <span>+37491374520</span>
                        <span>+37495778844</span>
                        <span className='mail'>info.proffsystem@gmail.com</span>
                    </div>

                    <div className='mobile_body_parts'>
                        <h3>{t("About Us")}</h3>
                        <span>{t("Our Company")}</span>
                        <span>{t("Our Works")}</span>
                    </div>

                </div>

                <div className="copy_right_wrapper">
                    <div className='copy_right'>
                        <img src={copyright} width='15' height='15' alt="copyright"/>
                        <span>Copyright {currentYear} ProffSystem, All Rights Reserved</span>
                    </div>

                    <div className='social_networks'>
                        <img className='social_network_item' src={instagram} alt="instagram"/>
                        <img className='social_network_item' src={facebook} alt=""/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;
