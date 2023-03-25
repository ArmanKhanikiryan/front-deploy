import React, { useEffect, useState } from "react";
import ProductsAccordion from "./productsAccordion";
import "./Products.css";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "features/store";
import { getImagesArplas, TArplas } from "features/arplas/arplasSlicer";
import { getAluminiumImages } from "features/aluminiumSlice/aluminiumSlice";
import {getGlassImages} from "features/glassSlice/glassSlice";
import {getHandrailsImages} from "features/handrailSlice/handrailsSlice";
import {getAutomaticSlide} from "features/automaticSlice/automaticSlide";
import {getBlindsImages} from "features/blindsSlice/blindsSlice";
import {getFacadeImages} from "features/facadeSlice/facadeSlice";
import Footer from "../../components/footer";

const Products = () => {
  const arplasState = useAppSelector((state) => state.arplas);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [popupState, setPopupState] = useState<boolean>(false)
  const [imagePopup, setImagePopup] = useState<string>('')

  let filtered: TArplas[] = [];


    useEffect(() => {
        if (location.state === 'aluminium' || location.state === 'doors' || location.state === 'windows' || location.state === 'all-alumin' || location.state === 'slide'
            || location.state === 'termo' || location.state === 'termo-slide' || location.state === 'termo-doors' || location.state === "termo-windows"){
            dispatch(getAluminiumImages())
        }
        else if (location.state === 'door-pvc' || location.state === 'metal-plastic' || location.state === 'window-pvc'){
            dispatch(getImagesArplas())
        }
        else if (location.state === 'glass' || location.state === 'glass-shower' || location.state === "glass-inner"){
            dispatch(getGlassImages())
        }
        else if (location.state === 'handrails' || location.state === 'glass-hand' || location.state === 'alumin-hand'){
            dispatch(getHandrailsImages())
        }
        else if (location.state === 'automatic') dispatch(getAutomaticSlide())
        else if (location.state === 'blinds') dispatch(getBlindsImages())
        else if (location.state === 'blinds') dispatch(getImagesArplas())
        else if (location.state === 'facade') dispatch(getFacadeImages())
    },[location.state])

    if (arplasState.length){
        if (location.state === 'all-alumin')  filtered = arplasState.map(elem => ({...elem, name: elem.name.slice(0, -5)}))
        else if (location.state === 'aluminium')  filtered = arplasState.map(elem => ({...elem, name: elem.name.slice(0, -9)}))
        else if (location.state === 'windows')  filtered = arplasState.filter(elem => elem.name.includes('nwnd') || elem.name.includes('ooww'))
            .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
        else if (location.state === 'doors')  filtered = arplasState.filter(elem => elem.name.includes('nwnd'))
            .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
        else if (location.state === 'slide')  filtered = arplasState.filter(elem => elem.name.includes('nnss'))
            .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
        else if (location.state === 'termo-slide')  filtered = arplasState.filter(elem => elem.name.includes('ttss'))
            .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
        else if (location.state === 'termo-windows')  filtered = arplasState.filter(elem => elem.name.includes('twoo') || elem.name.includes('twtd'))
            .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
        else if (location.state === 'termo-doors')  filtered = arplasState.filter(elem => elem.name.includes('twtd') || elem.name.includes('tdoo'))
            .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
        else if (location.state === 'termo')  filtered = arplasState.filter(elem => elem.name.includes('twtd') || elem.name.includes('ttss') || elem.name.includes('twoo') || elem.name.includes('tdoo'))
            .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
        else if (location.state === 'metal-plastic')  filtered = arplasState.map(elem => ({...elem, name: elem.name.slice(0, -5)}))
        else if (location.state === 'door-pvc')  filtered = arplasState.filter(elem => elem.name.includes('360') || elem.name.includes('460') || elem.name.includes('750'))
            .map(val => ({...val, name: val.name.slice(0, -5)}))
        else if (location.state === 'window-pvc')  filtered = arplasState.filter(elem => elem.name.includes('600') || elem.name.includes('630') || elem.name.includes('700'))
            .map(val => ({...val, name: val.name.slice(0, -5)}))
        else if (location.state === 'glass') filtered = arplasState.map(elem => ({...elem, name: ''}))
        else if (location.state === 'glass-shower') filtered = arplasState.filter(elem => elem.name.includes('shower'))
            .map(val => ({...val, name: ''}))
        else if (location.state === 'glass-inner') filtered = arplasState.filter(elem => elem.name.includes('inner'))
            .map(val => ({...val, name: ''}))
        else if (location.state === 'handrails') filtered = arplasState.map(elem => ({...elem, name: ''}))
        else if (location.state === 'glass-hand') filtered = arplasState.filter(elem => elem.name.includes('glas'))
            .map(val => ({...val, name: ''}))
        else if (location.state === 'alumin-hand') filtered = arplasState.filter(elem => elem.name.includes('metal'))
            .map(val => ({...val, name: ''}))
        else if (location.state === 'automatic') filtered = arplasState.map(elem => ({...elem, name: ''}))
        else if (location.state === 'blinds') filtered = arplasState.map(elem => ({...elem, name: ''}))
        else if (location.state === 'facade') filtered = arplasState.map(elem => ({...elem, name: ''}))
    }

    const handlePopup = (image:string) => {
        setImagePopup(image)
        setPopupState(true)
        document.body.style.overflow = 'hidden';
    }

    const handleClose = () => {
        setPopupState(false)
        document.body.style.overflow = '';
    }

  return (
    <div className="products_page_wrapper">
      <div className="products_list">
        <ProductsAccordion navigationParameter={location.state} />

                  <div className="product_items_list">
                      {filtered.length
                          ? filtered.map((elem, index) => {
                              return (
                                  <div key={index} onClick={() => handlePopup(elem.url)} className="product_card">
                                      <img
                                          src={elem.url}
                                          className="products_list_image"
                                          alt=""
                                      />
                                      {elem.name ?
                                          <span className="product_card_span">{elem.name}</span>
                                          :
                                          null
                                      }
                                  </div>
                              );
                          })
                          : null}
                  </div>
          {
              !popupState ?
                  null
                  :
                      <div className='popup' onClick={handleClose}>
                          <div onClick={(e) => e.stopPropagation()} className={`popup_container${popupState ? " show" : ""}`}>
                              <img src={imagePopup} className='popup_image' alt=""/>
                          </div>
                      </div>
          }
      </div>
        <div className='product_footer'>
            <Footer/>
        </div>
    </div>
  );
};
export default Products;
