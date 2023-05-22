import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  CarouselSubTitle,
  CarouselTitle,
  OverlayText,
  OverlayTexts,
} from "../assets/styled/HomeCarouselStyle";
import styled from "styled-components";
import Banner1 from "../assets/images/home-banner/slider-banner-1.jpg";
import Banner2 from "../assets/images/home-banner/slider-banner-2.jpg";
import Banner3 from "../assets/images/home-banner/slider-banner-3.jpg";
import Banner4 from "../assets/images/home-banner/slider-banner-4.jpg";
import Banner5 from "../assets/images/home-banner/slider-banner-5.jpg";
import Banner6 from "../assets/images/home-banner/slider-banner-6.jpg";

const Image = styled.img``;

const Container = styled.div``;

const HomeCarousel = () => {
  return (
    <>
      <Carousel
        showArrows={false}
        // autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={true}
      >
        <Container>
          <Image src={Banner1} />
          <OverlayText>
            <CarouselTitle>EMPOWERED BY EXPERIENCE AND EXPERTISE</CarouselTitle>
            <CarouselSubTitle>
              RAKtherm redefined the global piping industry by pushing the
              boundaries in providing groundbreaking piping solutions.
            </CarouselSubTitle>
          </OverlayText>
        </Container>
        <Container>
          <Image src={Banner3} />
          <OverlayText>
            <CarouselTitle>
              PERFORMING AT THE HEIGHT OF QUALITY EXCELLENCE
            </CarouselTitle>
            <CarouselSubTitle>
              Longest lasting networks for extreme conditions and
              Containerersified applications.
            </CarouselSubTitle>
          </OverlayText>
        </Container>
        <Container>
          <Image src={Banner4} />
          <OverlayText>
            <CarouselTitle>
              UNFOLDS THE POTENTIALS IN PIPING SYSTEMS
            </CarouselTitle>
            <CarouselSubTitle>
              To create versatile and comprehensive solutions.
            </CarouselSubTitle>
          </OverlayText>
        </Container>
        <Container>
          <Image src={Banner5} />
          <OverlayText>
            <CarouselTitle>
              THE RAREFIED CONCEPT FOR NOISE-REDUCTION TECHNOLOGY
            </CarouselTitle>
            <CarouselSubTitle>
              Engineered perfection of triple-sealing-lip solutions, Unveils the
              secret of ground-breaking RNP Technology.
            </CarouselSubTitle>
          </OverlayText>
        </Container>
        <Container>
          <Image src={Banner2} />
          <OverlayText>
            <CarouselTitle>
              ENGINEERED FOR ContainerERSE AND COMPREHENSIVE SOLUTIONS
            </CarouselTitle>
            <CarouselSubTitle>
              Driven by innovation breakthroughs We exist to be a leader in
              everything we do!
            </CarouselSubTitle>
          </OverlayText>
        </Container>
        <Container>
          <Image src={Banner6} />
          <OverlayTexts>
            <CarouselTitle>
              LONGEVOUS SEALING TECHNOLOGY REPRESENTS A NEW PARADIGM
            </CarouselTitle>
            <CarouselSubTitle>
              In solvent-cement drainage systems.
            </CarouselSubTitle>
          </OverlayTexts>
        </Container>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
