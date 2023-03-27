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

import OVERLAY from "../assets/images/RAKTHERM-VIDEO-OVERLAY.jpg";
import Video1 from "../assets/video/NOW-5-Layers-Reinforced-Pipes.mp4";
import VideoCarousel from "../component/VideoCarousel";

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
        <VideoCarousel overlay={OVERLAY} video={Video1}/>
      </div>
    </>
  );
};

export default Home;
