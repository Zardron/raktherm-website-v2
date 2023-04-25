import React from "react";
import styled from "styled-components";
import { TfiGallery } from "react-icons/tfi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { BsGift, BsListTask } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const TITLE = styled.h1`
  display: flex;
  justify-content: center;
  color: #3a4d6a;
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0 25px 0;
`;

const PlumberSideMenu = () => {
  const { title } = useParams();
  return (
    <>
      <TITLE>MENU</TITLE>
      <Link to={"/plumber-community/wall"}>
        <div
          class="list-block-icon-2"
          style={{
            border: "1px solid #008053",
            borderBottom: "none",
            padding: "10px 10px 0px 10px",
          }}
        >
          <div class="item" style={{ width: "100%" }}>
            <div class="block-icon-2">
              <div class="icon-cell">
                <div
                  class={`wrapper-icons  ${
                    title === "wall" ? "active-icon" : ""
                  }`}
                >
                  <i
                    class={`icons ${title === "wall" ? "active-menu" : ""}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: "0",
                    }}
                  >
                    <TfiGallery class="img-icon" />
                  </i>
                </div>
              </div>
              <div class="icon-cell">
                <div class="wrapper-info">
                  <div class="title">
                    <Link class={`link ${title === "wall" ? "active-text" : ""}`}>
                      COMMUNITY WALL
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/plumber-community/chatbox"}>
        <div
          class="list-block-icon-2"
          style={{
            border: "1px solid #008053",
            borderBottom: "none",
            padding: "10px 10px 0px 10px",
          }}
        >
          <div class="item" style={{ width: "100%" }}>
            <div class="block-icon-2">
              <div class="icon-cell">
                <div
                  class={`wrapper-icons  ${
                    title === "chatbox" ? "active-icon" : ""
                  }`}
                >
                  <i
                    class={`icons ${title === "chatbox" ? "active-menu" : ""}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: "0",
                    }}
                  >
                    <HiOutlineChatBubbleLeftRight class="img-icon" />
                  </i>
                </div>
              </div>
              <div class="icon-cell">
                <div class="wrapper-info">
                  <div class="title">
                    <Link class={`link ${title === "chatbox" ? "active-text" : ""}`}>
                      CHATBOX
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/plumber-community/challenges"}>
        <div
          class="list-block-icon-2"
          style={{
            border: "1px solid #008053",
            borderBottom: "none",
            padding: "10px 10px 0px 10px",
          }}
        >
          <div class="item" style={{ width: "100%" }}>
            <div class="block-icon-2">
              <div class="icon-cell">
                <div
                  class={`wrapper-icons  ${
                    title === "challenges" ? "active-icon" : ""
                  }`}
                >
                  <i
                    class={`icons ${title === "challenges" ? "active-menu" : ""}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: "0",
                    }}
                  >
                    <BsListTask class="img-icon" />
                  </i>
                </div>
              </div>
              <div class="icon-cell">
                <div class="wrapper-info">
                  <div class="title">
                    <Link class={`link ${title === "challenges" ? "active-text" : ""}`}>
                      CHALLENGES
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/plumber-community/rewards"}>
        <div
          class="list-block-icon-2"
          style={{
            border: "1px solid #008053",
            padding: "10px 10px 0px 10px",
          }}
        >
          <div class="item" style={{ width: "100%" }}>
            <div class="block-icon-2">
              <div class="icon-cell">
                <div
                  class={`wrapper-icons  ${
                    title === "rewards" ? "active-icon" : ""
                  }`}
                >
                  <i
                    class={`icons ${title === "rewards" ? "active-menu" : ""}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: "0",
                    }}
                  >
                    <BsGift class="img-icon" />
                  </i>
                </div>
              </div>
              <div class="icon-cell">
                <div class="wrapper-info">
                  <div class="title">
                    <Link class={`link ${title === "rewards" ? "active-text" : ""}`}>
                      REWARDS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PlumberSideMenu;
