import React, { useState } from "react";
import styled from "styled-components";
import NodeLogo from '../../images/Logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo src={NodeLogo}>
        
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/">NOSSOS SERVIÇOS</MenuLink>
        <MenuLink href="/">PROJETOS</MenuLink>
        <MenuLink href="/">SOBRE NÓS</MenuLink>
        <MenuLink href="/">CONTATO</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #936FED;
  }

  @media (max-width: 768px) {
      color: #fff;

      &:hover{
          color: #252525;
      }
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.img`
 width: 15%;
 padding: 10px;

 @media (max-width: 768px){
   width: 35%;
 }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    background-color: #936FED;
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;