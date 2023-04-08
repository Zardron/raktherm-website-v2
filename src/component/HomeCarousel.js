import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  CarouselSubTitle,
  CarouselTitle,
  OverlayText,
  OverlayTexts,
} from "../assets/styled/HomeCarouselStyle";
import styled from "styled-components";

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
          <Image src="https://www.raktherm.com/assets/images/background/slider-banner-1.jpg" />
          <OverlayText>
            <CarouselTitle>EMPOWERED BY EXPERIENCE AND EXPERTISE</CarouselTitle>
            <CarouselSubTitle>
              RAKtherm redefined the global piping industry by pushing the
              boundaries in providing groundbreaking piping solutions.
            </CarouselSubTitle>
          </OverlayText>
        </Container>
        <Container>
          <Image src="https://www.raktherm.com/assets/images/background/slider-banner-3.jpg" />
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
          <Image src="https://www.raktherm.com/assets/images/background/slider-banner-4.jpg" />
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
          <Image src="https://www.raktherm.com/assets/images/background/slider-banner-5.jpg" />
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
          <Image src="https://www.raktherm.com/assets/images/background/slider-banner-2.jpg" />
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
          <Image src="https://www.raktherm.com/assets/images/background/slider-banner-6.jpg" />
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
