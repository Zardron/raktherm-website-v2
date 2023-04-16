import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: white;
  height: 130px;
  z-index: 5;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
`;

export const Container = styled.div`
  width: 1270px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
  background-color: white;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Image = styled.img`
  height: 80px;
  cursor: pointer;
`;

export const Nav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 100%;
  left: 10px;
  width: 13rem;
  transform: translateY(10px);
  opacity: 0;
  pointer-events: none;
  background-color: white;
  box-shadow: 3px 6px 14px #00000019;
  /* border-top: 1px solid #029447; */
  transition: all 0.3s ease-out;
  z-index: 99;
`;

export const AccountDropDown = styled.div`
  position: absolute;
  top: 100%;
  left: 10px;
  width: 10rem;
  transform: translateY(10px);
  opacity: 0;
  pointer-events: none;
  background-color: white;
  box-shadow: 3px 6px 14px #00000019;
  border-top: 1px solid #029447;
  transition: all 0.3s ease-out;
`;

export const LoginDropDown = styled.div`
  position: absolute;
  top: 100%;
  left: 10px;
  width: 10rem;
  transform: translateY(10px);
  opacity: 0;
  pointer-events: none;
  background-color: white;
  box-shadow: 3px 6px 14px #00000019;
  border-top: 3px solid #029447;
  transition: all 0.3s ease-out;
`;

export const SubMenu = styled.div`
  position: absolute;
  top: 65%;
  left: 208px;
  width: 12rem;
  transform: translateY(10px);
  opacity: 0;
  pointer-events: none;
  background-color: white;
  box-shadow: 3px 6px 14px #00000019;
  border-top: 3px solid #029447;
  transition: all 0.3s ease-out;
`;

export const NavLinksss = styled.div`
  position: relative;

  :hover ${DropDown} {
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
  }

  :hover ${AccountDropDown} {
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
  }
`;

export const NavLinkssss = styled(Link)`
  position: relative;

  :hover ${DropDown} {
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
  }

  :hover ${AccountDropDown} {
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  flex: 2;
`;

export const UL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const Separator = styled.span`
  letter-spacing: 1px;
  font-size: 0.8rem;
  line-height: 3rem;
  font-weight: bolder;
  position: relative;
  padding-bottom: 5px;
  color: #029447;
`;

export const CaretDown = styled(MdOutlineKeyboardArrowDown)`
  font-size: 14px;
  margin-left: 0.2rem;
  font-weight: bolder;
  color: #767272;
  transform: rotate(0deg);
  transition: transform 0.4s linear;
`;

export const Label = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 130px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  color: #0000;
  cursor: pointer;
  padding: 0 0.5rem;
  transition: 0.5s;
  text-decoration: none;
  background: linear-gradient(90deg, #029447 50%, #000 0) var(--_p, 100%) / 200%
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  transition: 0.4s;

  :hover {
    --_p: 0%;
  }

  :hover ${CaretDown} {
    /* color: #029447; */
    transform: rotate(180deg);
    transition: transform 0.4s linear;
  }
`;

export const Menu = styled.ul`
  position: relative;
  padding: 0px;
`;

export const Menus = styled.ul`
  position: relative;
  padding: 0px;
`;

export const MenuItem = styled.li`
  border-bottom: 1px solid #dbdbdb;
  :nth-last-child(1) {
    border-bottom: 0px solid #dbdbdb;
  }
`;

export const SubMenuItem = styled.li`
  border-bottom: 1px solid #dbdbdb;
  :nth-last-child(1) {
    border-bottom: 0px solid #dbdbdb;
  }
`;

export const MenuItemLabel = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  background-color: #fff;
  color: #504c4c;
  font-size: 12px;
  line-height: 20px;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  --s: 0.2em; /* the thickness of the line */
  --c: #029447; /* the color */

  border-bottom: var(--s);
  background: linear-gradient(90deg, var(--c) 50%, #029447 0)
      calc(100% - var(--_p, 0%)) / 200% 100%,
    linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) var(--s) no-repeat;
  -webkit-background-clip: text, border-box;
  background-clip: text, border-box;
  transition: 0.6s;

  :hover {
    color: #029447;
    background-color: #efefef;
    --_p: 100%;
  }

  :hover ${SubMenu} {
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
  }
`;

export const SubMenuItemLabel = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  background-color: #fff;
  color: #504c4c;
  font-size: 12px;
  line-height: 20px;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  --s: 0.2em; /* the thickness of the line */
  --c: #029447; /* the color */

  border-bottom: var(--s);
  background: linear-gradient(90deg, var(--c) 50%, #029447 0)
      calc(100% - var(--_x, 0%)) / 200% 100%,
    linear-gradient(var(--c) 0 0) 0% 100% / var(--_x, 0%) var(--s) no-repeat;
  -webkit-background-clip: text, border-box;
  background-clip: text, border-box;
  transition: 0.6s;

  :hover {
    color: #029447;
    background-color: #efefef;
    --_x: 100%;
  }
`;

export const copy = styled.img``;
