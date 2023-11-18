import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides , height, width}) => {
    return (
        <Carousel infiniteLoop>
            {slides.map((slide, index) => {

                return <Image 
                key={index} 
                src={slide} 
                style={{  height:height, width: width  }}/>;
                // style={{  height: "200px", width: "300px"  }}/>;
            })}
        </Carousel>
    );
};

export default ImageSlider;