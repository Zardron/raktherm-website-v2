import React, { useEffect, useState } from "react";
import {
  CaretDown,
  Container,
  DropDown,
  Header,
  Image,
  Label,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLabel,
  Nav,
  NavLinks,
  Separator,
  SubMenu,
  SubMenuItem,
  SubMenuItemLabel,
  UL,
  Menus,
  NavLinksss,
} from "../assets/styled/NavbarStyle";
import { NavbarData } from "../assets/data/NavbarData";
import { Link } from "react-router-dom";

const Navbar = ({}) => {
  const [offset, setOffset] = useState(0);
  const [isUpper, setIsUpper] = useState(true);
  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (offset > 0) {
      setIsUpper(false);
    } else {
      setIsUpper(true);
    }
  }, [offset]);

  return (
    <Header className={isUpper ? "" : "sticky"}>
      <Container>
        <LogoContainer>
          <Link to="/">
            <Image
              src="https://www.raktherm.com/assets/images/logos/logo-2.png"
              alt="logo"
            />
          </Link>
        </LogoContainer>

        <Nav>
          <NavLinks>
            <UL>
              <Separator>|</Separator>
              {NavbarData.map((data, index) => (
                <>
                  <NavLinksss key={index}>
                    <Label className={isUpper ? "" : "scrolled"}>
                      {data.title}
                      {data.isMenu && <CaretDown />}
                    </Label>
                    <DropDown>
                      <Menu>
                        {data.menu.map((subdata, key) => (
                          <MenuItem key={key}>
                            <Link to={`${subdata.link}`}>
                              <MenuItemLabel>
                                {subdata.title}{" "}
                                {subdata.isSubMenu && <CaretDown />}
                                {subdata.isSubMenu && (
                                  <SubMenu>
                                    <Menus>
                                      {subdata.subMenu.map((datas, key) => (
                                        <SubMenuItem key={key}>
                                          <SubMenuItemLabel>
                                            {datas.title}
                                          </SubMenuItemLabel>
                                        </SubMenuItem>
                                      ))}
                                    </Menus>
                                  </SubMenu>
                                )}
                              </MenuItemLabel>
                            </Link>
                          </MenuItem>
                        ))}
                      </Menu>
                    </DropDown>
                  </NavLinksss>
                  <Separator>|</Separator>
                </>
              ))}
            </UL>
          </NavLinks>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
