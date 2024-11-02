import React, { useState } from 'react';
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { WiAlien } from "react-icons/wi";
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconClicked, setIconClicked] = useState(false); // State to toggle icon color
  const theme = useTheme();

  const handleIconClick = () => {
    setIconClicked(!iconClicked); // Toggle between true and false
    window.location.href = '#about'; // Scroll to about section
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="#about" onClick={handleIconClick}>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '5px', cursor: 'pointer', gap: '0rem' }}>
            <WiAlien size="4rem" color={iconClicked ? 'red' : 'white'} /> {/* Toggle color */}
            <span 
              className='block' 
              style={{
                fontFamily: "'Lobster', cursive",
                fontSize: "25px",
                background: "linear-gradient(90deg, #915EFF, #00BFFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              {"<"}Roshan Rai{"/>"}
            </span>
          </a>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href="#contact" onClick={() => setIsOpen(!isOpen)}>Contact</MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
