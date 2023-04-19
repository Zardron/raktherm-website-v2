import React from "react";
import TopBar from "../component/TopBar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SubFooter from "../component/SubFooter";
import QuickLink from "../component/QuickLink";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Container,
  Wrapper,
  LeftPanel,
  RightPanel,
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
  WidgetTitle,
  ArrowRight,
  WidgetContent,
  WidgetLink,
  WidgetDetails,
  Details,
  Title,
  WidgetSubTitle,
  ChecklistContainer,
  Check,
  Button,
  PDF,
  PDFButton,
} from "../assets/styled/BlogStyle";
import { useParams } from "react-router-dom";
import { BLOGS_DATA } from "../assets/data/BlogsData";
import Blog_1 from "../component/Blogs/Blog_1";
import Blog_2 from "../component/Blogs/Blog_2";
import Blog_3 from "../component/Blogs/Blog_3";
import Blog_4 from "../component/Blogs/Blog_4";
import Blog_5 from "../component/Blogs/Blog_5";

const BlogDetails = () => {
  const loggedIn = false;
  const { title } = useParams();

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
                    <BannerTitleLine>|</BannerTitleLine>BLOGS DETAILS
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
              <ActiveLink>{title.replace(/-|\s/g, " ")}</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          <Container>
            <Wrapper>
              <LeftPanel>
                <WidgetTitle>ABOUT RAKTHERM</WidgetTitle>
                {BLOGS_DATA.map((item, index) => (
                  <>
                    <WidgetLink
                      to={`/blog-detail/${item.link.toLocaleLowerCase()}`}
                      key={index}
                    >
                      {item.title}
                      <ArrowRight />
                    </WidgetLink>
                  </>
                ))}
              </LeftPanel>

              <RightPanel>
                {title === "why-reliable-plumbing-is-necessary" && <Blog_1 />}
                {title === "the-future-of-drainage-piping-systems-delivered-today" && <Blog_2 />}
                {title === "innovator-of-uv-fittings-system" && <Blog_3 />}
                {title === "raktherm-emerges-as-an-industry" && <Blog_4 />}
                {title === "innovative-u-loop-expansion-for-potable-water-line" && <Blog_5 />}
              </RightPanel>
            </Wrapper>
          </Container>
        </WidgetContent>
      </BannerPage>
      <SubFooter />
      <Footer />
    </>
  );
};

export default BlogDetails;
