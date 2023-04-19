import React from "react";
import TopBar from "../component/TopBar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SubFooter from "../component/SubFooter";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Container,
  BannerPage,
  Content,
  BannerTitle,
  BannerTitleLine,
  BannerTitleWrapper,
  HomeLink,
  Arrow,
  ActiveLink,
  AboutUsWrapper,
  GetInTouch,
  AboutUsDetails,
  GetInTouchDetails,
  WidgetContent,
  BlogPanel,
  BlogWrapper,
  Image,
  BlogTitle,
  BlogDetails,
  ImageWrapper,
  Button,
} from "../assets/styled/BlogStyle";
import styled from "styled-components";
import { BLOGS_DATA } from "../assets/data/BlogsData";

const TitleWrapper = styled.div`
  display: flex;
`;

const LineTitle = styled.span`
  text-align: left;
  position: relative;
  color: #008053;
  font-size: 27px;
  font-weight: 900;
`;

const Title = styled.p`
  text-align: left;
  position: relative;
  color: #3a4d6a;
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 0px 10px;
`;

const Div = styled.div`
  padding-top: 50px;
`;

const Blog = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <BannerPage>
        <Container>
          <Content>
            <AboutUsWrapper>
              <AboutUsDetails>
                <BannerTitleWrapper>
                  <BannerTitle>
                    <BannerTitleLine>|</BannerTitleLine>Blogs
                  </BannerTitle>
                </BannerTitleWrapper>
              </AboutUsDetails>
              <GetInTouchDetails>
                <GetInTouch>GET IN TOUCH</GetInTouch>
              </GetInTouchDetails>
            </AboutUsWrapper>

            <HomeLink to="/">
              Home{" "}
              <Arrow>
                <MdOutlineKeyboardArrowRight />
              </Arrow>{" "}
              <ActiveLink>Blogs</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          <Container>
            <Div>
              <TitleWrapper>
                <LineTitle>|</LineTitle>
                <Title>RAKTHERM BLOGS</Title>
              </TitleWrapper>
            </Div>

            <BlogWrapper>
              {BLOGS_DATA.map((data, index) => (
                <BlogPanel key={index}>
                  <div class="block-1">
                    <div class="block-info">
                      <ImageWrapper>
                        <Image src={data.src} alt="blog-1" />
                      </ImageWrapper>
                    </div>
                    <div
                      class="block-content"
                      style={{ paddingBottom: "30px" }}
                    >
                      <BlogTitle>{data.title}</BlogTitle>
                      <BlogDetails>{data.desc}</BlogDetails>

                      <Button style={{ marginBottom: "20px", width: "15%" }} to={`/blog-detail/${data.link.toLowerCase()}`}>
                        READ MORE
                      </Button>
                    </div>
                  </div>
                </BlogPanel>
              ))}

              
            </BlogWrapper>
          </Container>
        </WidgetContent>
      </BannerPage>
      <SubFooter />
      <Footer />
    </>
  );
};

export default Blog;
