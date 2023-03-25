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
import arplas360 from '../../assets/images/uPVC profiles 60mm s 360 series.webp'
import arplas460 from '../../assets/images/uPVC profiles 60mm s 460 series.webp'
import arplas600 from '../../assets/images/uPVC profiles 60mm s 600 series.webp'
import arplas630 from '../../assets/images/uPVC profiles 60mm s 630 series.webp'
import arplas750 from '../../assets/images/uPVC profiles s 750 Series.webp'
import arplas700 from '../../assets/images/uPVC profiles 70mm s 700 series.webp'
import aldox from '../../assets/images/Aldox ooww.webp'
import oval45 from '../../assets/images/Oval 45 nwnd.webp'
import oval50 from '../../assets/images/Oval-50 nwnd.webp'
import ovalSlide28 from '../../assets/images/Oval Slide 28 nnss.webp'
import ovalSlide32 from '../../assets/images/Oval Slide 32 nnss.webp'
import termoSlide1 from '../../assets/images/SSL128-1 Slide ttss.webp'
import termoSlide2 from '../../assets/images/SSL128-2 Slide ttss.webp'
import termoSlide3 from '../../assets/images/SSL128 Slide ttss.webp'
import termoDoor1 from '../../assets/images/EW 55 twtd.webp'
import termoDoor2 from '../../assets/images/EW 69 twoo.webp'
import termoWindow from '../../assets/images/SI-57 twoo.webp'

type ObjectArray = {
    name: string,
    src: string
}










const arplasWindows: ObjectArray[] = [
    {
        name: 'uPVC profiles 60mm s 360 series',
        src: arplas360
    },
    {
        name: 'uPVC profiles 60mm s 460 series',
        src: arplas460
    },
    {
        name: 'uPVC profiles s 750 Series',
        src: arplas750
    }
]
const arplasDoors: ObjectArray[] = [
    {
        name: 'uPVC profiles 60mm s 600 series',
        src: arplas600
    },
    {
        name: 'uPVC profiles 60mm s 630 series',
        src: arplas630
    },
    {
        name: 'uPVC profiles 70mm s 700 series',
        src: arplas700
    }
]


const facadeProfileArray = [
    {
        name: '',
        src: facadeProfile1
    },
    {
        name: '',
        src: facadeProfile2
    }
]
const automaticArray = [
    {
        name: '',
        src: automatic1
    },
    {
        name: '',
        src: automatic2
    },
    {
        name: '',
        src: automatic3
    }
]
const blindsArray = [
    {
        name: '',
        src: blinds1
    },
    {
        name: '',
        src: blinds2
    }
]
const glassHandArray = [
    {
        name: '',
        src: glassHand1
    },
    {
        name: '',
        src: glassHand2
    },
]
const metalHandArray = [
    {
        name: '',
        src: metalHand1
    },
    {
        name: '',
        src: metalHand2
    },
]
const innerRoomArray = [
    {
        name: '',
        src: innerRoom1,
    },
    {
        name: '',
        src: innerRoom2
    },
]
const showerArray = [
    {
        name: '',
        src: shower1
    },
    {
        name: '',
        src: shower2
    },
]
const aluminiumWindows: ObjectArray[] = [
    {
        name: 'Aldox',
        src: aldox
    },
    {
        name: 'Oval 45',
        src: oval45
    },
    {
        name: 'Oval 50',
        src: oval50
    },

]

const aluminiumDoors:ObjectArray[] = [
    {
        name: 'Oval 45',
        src: oval45
    },
    {
        name: 'Oval 50',
        src: oval50
    },
]

const aluminiumSlides:ObjectArray[] = [
    {
        name: 'Oval Slide 28',
        src: ovalSlide28
    },
    {
        name: 'Oval Slide 32',
        src: ovalSlide32
    },
]

const termoSlide: ObjectArray[] = [
    {
        name: 'SSL128-1 Slide',
        src: termoSlide1
    },
    {
        name: 'SSL128-2 Slide',
        src: termoSlide2
    },
    {
        name: 'SSL128 Slide',
        src: termoSlide3
    },

]

const termoDoors: ObjectArray[] = [
    {
        name: 'EW 55',
        src: termoDoor1
    },
    {
        name: 'EW 69 Door',
        src: termoDoor2
    },
]

const termoWindows:ObjectArray[] = [
    {
        name: 'SI 57',
        src: termoWindow
    },
    {
        name: 'EW 55',
        src: termoDoor1
    },
    {
        name: 'EW 69',
        src: termoDoor2
    },
]


const Products = () => {
  const location = useLocation();
  const [popupState, setPopupState] = useState<boolean>(false)
  const [imagePopup, setImagePopup] = useState<string>('')

  let filtered:ObjectArray[] = [];
        if (location.state === 'all-alumin') filtered =  aluminiumWindows.concat(aluminiumDoors,aluminiumSlides, termoSlide, termoDoors, termoWindows)
        else if (location.state === 'termo') filtered = termoSlide.concat(termoDoors, termoWindows)
        else if (location.state === 'aluminium') filtered = aluminiumWindows.concat(aluminiumDoors,aluminiumSlides)
        else if (location.state === 'doors') filtered = aluminiumDoors
        else if (location.state === 'windows') filtered = aluminiumWindows
        else if (location.state === 'slide') filtered = aluminiumSlides
        else if (location.state === 'termo-doors') filtered = termoDoors
        else if (location.state === 'termo-slide') filtered = termoSlide
        else if (location.state === 'termo-windows') filtered = termoWindows
        else if (location.state === 'metal-plastic') filtered = arplasWindows.concat(arplasDoors)
        else if (location.state === 'door-pvc') filtered = arplasDoors
        else if (location.state === 'window-pvc') filtered = arplasWindows
        else if (location.state === 'glass') filtered = showerArray.concat(innerRoomArray)
        else if (location.state === 'glass-shower') filtered = showerArray
        else if (location.state === "glass-inner") filtered = innerRoomArray
        else if (location.state === 'handrails') filtered = glassHandArray.concat(metalHandArray)
        else if (location.state === 'glass-hand') filtered = glassHandArray
        else if (location.state === 'alumin-hand') filtered = metalHandArray
        else if (location.state === 'automatic') filtered = automaticArray
        else if (location.state === 'blinds') filtered = blindsArray
        else if (location.state === 'facade') filtered = facadeProfileArray
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
                          ? filtered.map(({src, name}, index) => {
                              return (
                                  <div key={index} onClick={() => handlePopup(src)} className={popupState ? "product_card_without" : 'product_card'}>
                                      <img
                                          src={src}
                                          className="products_list_image"
                                          alt=""
                                      />
                                      {name ?
                                          <span className="product_card_span">{name}</span>
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
