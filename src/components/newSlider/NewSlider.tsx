import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./NewSlider.css";
import facade1 from '../../assets/images/facade1.webp'
import facade2 from '../../assets/images/facade2.webp'
import facade3 from '../../assets/images/facade3.webp'
import facade4 from '../../assets/images/facade4.webp'

const imagesArray: string[] = [
    facade1,
    facade2,
    facade3,
    facade4
]
const NewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(3);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex === 3) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="slider_wrapper">
      <ArrowCircleLeftIcon
        className="left_arrow"
        style={{ fontSize: "50px" }}
        onClick={handlePrev}
      />
      <Grid container className="carousel">
        {imagesArray.map((image, index) => (
          <Grid
            item
            xs={12}
            key={index}
            className={`slide ${index === currentIndex ? "slide-active" : ""}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </Grid>
        ))}
        <Grid item xs={12} className="control"></Grid>
      </Grid>
      <ArrowCircleRightIcon
        className="right_arrow"
        style={{ fontSize: "50px" }}
        onClick={handleNext}
      />
    </div>
  );
};

export default NewSlider;
