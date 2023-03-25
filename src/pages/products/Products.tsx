import React, { useEffect, useState } from "react";
import ProductsAccordion from "./productsAccordion";
import "./Products.css";
import Footer from "../../components/footer";
import { useLocation } from "react-router";
import facadeProfile1 from '../../assets/images/facadeProfile1.webp'
import facadeProfile2 from '../../assets/images/facadeProfile2.webp'
import automatic1 from '../../assets/images/automatic.webp'
import automatic2 from '../../assets/images/automatic2.webp'
import automatic3 from '../../assets/images/automatic3.webp'
import blinds1 from '../../assets/images/blids1.webp'
import blinds2 from '../../assets/images/blinds2.webp'
import glassHand1 from '../../assets/images/glasHanddrail1.webp'
import glassHand2 from '../../assets/images/glassHandrail2.webp'
import metalHand1 from '../../assets/images/metalHandrail1.webp'
import metalHand2 from '../../assets/images/metalHandrail2.webp'
import innerRoom1 from '../../assets/images/inner1.webp'
import innerRoom2 from '../../assets/images/inner2.webp'
import shower1 from '../../assets/images/showerImage1.webp'
import shower2 from '../../assets/images/showerImage2.webp'


const facadeProfileArray = [
    facadeProfile1,
    facadeProfile2
]
const automaticArray = [
    automatic1,
    automatic2,
    automatic3
]
const blindsArray = [
    blinds1,
    blinds2
]
const glassHandArray = [
    glassHand1,
    glassHand2
]
const metalHandArray = [
    metalHand1,
    metalHand2
]
const innerRoomArray = [
    innerRoom1,
    innerRoom2
]
const showerArray = [
    shower1,
    shower2
]


const Products = () => {
  const location = useLocation();
  const [popupState, setPopupState] = useState<boolean>(false)
  const [imagePopup, setImagePopup] = useState<string>('')

  let filtered:string[] = [];
    console.log(location.state)

        // if (location.state === 'aluminium' || location.state === 'doors' || location.state === 'windows' || location.state === 'all-alumin' || location.state === 'slide'
        //     || location.state === 'termo' || location.state === 'termo-slide' || location.state === 'termo-doors' || location.state === "termo-windows"){
        //     dispatch(getAluminiumImages())
        // }
        // else if (location.state === 'door-pvc' || location.state === 'metal-plastic' || location.state === 'window-pvc'){
        //     dispatch(getImagesArplas())
        // }
        if (location.state === 'asdas'){

        }
        else if (location.state === 'glass') filtered = showerArray.concat(innerRoomArray)
        else if (location.state === 'glass-shower') filtered = showerArray
        else if (location.state === "glass-inner") filtered = innerRoomArray
        else if (location.state === 'handrails') filtered = glassHandArray.concat(metalHandArray)
        else if (location.state === 'glass-hand') filtered = glassHandArray
        else if (location.state === 'alumin-hand') filtered = metalHandArray
        else if (location.state === 'automatic') filtered = automaticArray
        else if (location.state === 'blinds') filtered = blindsArray
        else if (location.state === 'facade') filtered = facadeProfileArray


    // if (arplasState.length){
    //     if (location.state === 'all-alumin')  filtered = arplasState.map(elem => ({...elem, name: elem.name.slice(0, -5)}))
    //     else if (location.state === 'aluminium')  filtered = arplasState.map(elem => ({...elem, name: elem.name.slice(0, -9)}))
    //     else if (location.state === 'windows')  filtered = arplasState.filter(elem => elem.name.includes('nwnd') || elem.name.includes('ooww'))
    //         .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
    //     else if (location.state === 'doors')  filtered = arplasState.filter(elem => elem.name.includes('nwnd'))
    //         .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
    //     else if (location.state === 'slide')  filtered = arplasState.filter(elem => elem.name.includes('nnss'))
    //         .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
    //     else if (location.state === 'termo-slide')  filtered = arplasState.filter(elem => elem.name.includes('ttss'))
    //         .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
    //     else if (location.state === 'termo-windows')  filtered = arplasState.filter(elem => elem.name.includes('twoo') || elem.name.includes('twtd'))
    //         .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
    //     else if (location.state === 'termo-doors')  filtered = arplasState.filter(elem => elem.name.includes('twtd') || elem.name.includes('tdoo'))
    //         .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
    //     else if (location.state === 'termo')  filtered = arplasState.filter(elem => elem.name.includes('twtd') || elem.name.includes('ttss') || elem.name.includes('twoo') || elem.name.includes('tdoo'))
    //         .map(elem => ({...elem, name: elem.name.slice(0, -9)}))
    //     else if (location.state === 'metal-plastic')  filtered = arplasState.map(elem => ({...elem, name: elem.name.slice(0, -5)}))
    //     else if (location.state === 'door-pvc')  filtered = arplasState.filter(elem => elem.name.includes('360') || elem.name.includes('460') || elem.name.includes('750'))
    //         .map(val => ({...val, name: val.name.slice(0, -5)}))
    //     else if (location.state === 'window-pvc')  filtered = arplasState.filter(elem => elem.name.includes('600') || elem.name.includes('630') || elem.name.includes('700'))
    //         .map(val => ({...val, name: val.name.slice(0, -5)}))
    //     else if (location.state === 'glass') filtered = arplasState.map(elem => ({...elem, name: ''}))
    //     else if (location.state === 'glass-shower') filtered = arplasState.filter(elem => elem.name.includes('shower'))
    //         .map(val => ({...val, name: ''}))
    //     else if (location.state === 'glass-inner') filtered = arplasState.filter(elem => elem.name.includes('inner'))
    //         .map(val => ({...val, name: ''}))
    //     else if (location.state === 'handrails') filtered = arplasState.map(elem => ({...elem, name: ''}))
    //     else if (location.state === 'glass-hand') filtered = arplasState.filter(elem => elem.name.includes('glas'))
    //         .map(val => ({...val, name: ''}))
    //     else if (location.state === 'alumin-hand') filtered = arplasState.filter(elem => elem.name.includes('metal'))
    //         .map(val => ({...val, name: ''}))
    //     else if (location.state === 'automatic') filtered = arplasState.map(elem => ({...elem, name: ''}))
    //     else if (location.state === 'blinds') filtered = arplasState.map(elem => ({...elem, name: ''}))
    //     else if (location.state === 'facade') filtered = arplasState.map(elem => ({...elem, name: ''}))
    // }

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
                          ? filtered.map((elem:string, index:number) => {
                              return (
                                  <div key={index} onClick={() => handlePopup(elem)} className="product_card">
                                      <img
                                          src={elem}
                                          className="products_list_image"
                                          alt=""
                                      />
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
