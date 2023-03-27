import React from "react";
import { SignUp, Topbar } from "../assets/Topbar";
import Navbar from "../component/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CarouselSubTitle,
  CarouselTitle,
  OverlayText,
  OverlayTexts,
} from "../assets/Home";

import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  return (
    <>
      <Topbar>
        <div class="containers" style={{ padding: "5px 25px" }}>
          <SignUp>Sign up to Join My RAKtherm</SignUp>
        </div>
      </Topbar>
      <div class="containers">
        <Navbar />
      </div>
      <Carousel
        showArrows={false}
        // autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={true}
      >
        <div>
          <img src="https://www.raktherm.com/assets/images/background/slider-banner-1.jpg" />
          <OverlayText>
            <CarouselTitle>EMPOWERED BY EXPERIENCE AND EXPERTISE</CarouselTitle>
            <CarouselSubTitle>
              RAKtherm redefined the global piping industry by pushing the
              boundaries in providing groundbreaking piping solutions.
            </CarouselSubTitle>
          </OverlayText>
        </div>
        <div>
          <img src="https://www.raktherm.com/assets/images/background/slider-banner-3.jpg" />
          <OverlayText>
            <CarouselTitle>
              PERFORMING AT THE HEIGHT OF QUALITY EXCELLENCE
            </CarouselTitle>
            <CarouselSubTitle>
              Longest lasting networks for extreme conditions and diversified
              applications.
            </CarouselSubTitle>
          </OverlayText>
        </div>
        <div>
          <img src="https://www.raktherm.com/assets/images/background/slider-banner-4.jpg" />
          <OverlayText>
            <CarouselTitle>
              UNFOLDS THE POTENTIALS IN PIPING SYSTEMS
            </CarouselTitle>
            <CarouselSubTitle>
              To create versatile and comprehensive solutions.
            </CarouselSubTitle>
          </OverlayText>
        </div>
        <div>
          <img src="https://www.raktherm.com/assets/images/background/slider-banner-5.jpg" />
          <OverlayText>
            <CarouselTitle>
              THE RAREFIED CONCEPT FOR NOISE-REDUCTION TECHNOLOGY
            </CarouselTitle>
            <CarouselSubTitle>
              Engineered perfection of triple-sealing-lip solutions, Unveils the
              secret of ground-breaking RNP Technology.
            </CarouselSubTitle>
          </OverlayText>
        </div>
        <div>
          <img src="https://www.raktherm.com/assets/images/background/slider-banner-2.jpg" />
          <OverlayText>
            <CarouselTitle>
              ENGINEERED FOR DIVERSE AND COMPREHENSIVE SOLUTIONS
            </CarouselTitle>
            <CarouselSubTitle>
              Driven by innovation breakthroughs We exist to be a leader in
              everything we do!
            </CarouselSubTitle>
          </OverlayText>
        </div>
        <div>
          <img src="https://www.raktherm.com/assets/images/background/slider-banner-6.jpg" />
          <OverlayTexts>
            <CarouselTitle>
              LONGEVOUS SEALING TECHNOLOGY REPRESENTS A NEW PARADIGM
            </CarouselTitle>
            <CarouselSubTitle>
              In solvent-cement drainage systems.
            </CarouselSubTitle>
          </OverlayTexts>
        </div>
      </Carousel>

      <div className="containers">
        <MultiCarousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          style={{padding: "0px 50px"}}
        >
          <div style={{padding: "20px"}}>
            <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div style={{padding: "20px"}}>
            <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div style={{padding: "20px"}}>
            <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div style={{padding: "20px"}}>
            <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div style={{padding: "20px"}}>
            <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </div>
        </MultiCarousel>
      </div>
    </>
  );
};

export default Home;
