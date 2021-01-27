import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData, MenuItem } from "../data/MenuData";
import Button from "./Button";
import Bars from "../images/icons8-menu.svg";


const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  padding: 1rem 2rem;
  //background-color: #000;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
/**
 * Lưu ý: khi sử dụng Link trong react-router-dom bạn phải Wrap comp sử dụng chúng
 * ở đây ta Wrap toàn bộ App để sử dụng được trong mọi nơi
 */

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    width: 40px;
    height: 40px;
    padding-left: 1rem;
    cursor: pointer;
    position: absolute;
    z-index: 100;
    top: 0;
    right: 1rem;
    transform: translate(-25%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  //background-color: red;
  justify-content: flex-end;
  flex: 1;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLink = styled(Link)`
  ${NavLink}
`;

export type NavProps = {
  toggle: () => void;
}

const Navbar: React.FC<NavProps> = ({toggle}) => {
  return (
    <Nav>
      <Logo to="/"> KAKA </Logo>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        {menuData.map((item: MenuItem, index: number) => (
          <NavMenuLink to="/" key={index}>
            {item.title}
          </NavMenuLink>
        ))}
      </NavMenu>

      <ButtonContainer>
        <Button to="/aaa" primary>
          About Us
        </Button>
        
      </ButtonContainer>
    </Nav>
  );
};

export default Navbar;
