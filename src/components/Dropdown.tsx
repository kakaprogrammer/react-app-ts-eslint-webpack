/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";

type DropdownContainerProps = {
  isOpen: boolean;
}
const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  opacity: ${({isOpen}: DropdownContainerProps) => (isOpen ? '1' : '0')};
  top: ${({isOpen}: DropdownContainerProps) => (isOpen ? '0' : '-100%')};
  transition: 0.3s ease-in-out;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
`;

const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-top:4rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px); 
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;
  list-style: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export type DropdownProps ={
  isOpen: boolean;
  toggle: () => void;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink key={index} to={item.link}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
      </DropdownWrapper>
      <BtnWrap>
        <Button primary big to="/contact">
          Contact Us
        </Button>
      </BtnWrap>
    </DropdownContainer>
  );
};

export default Dropdown;
