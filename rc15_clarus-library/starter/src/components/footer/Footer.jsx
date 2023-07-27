import React from "react";
import { lightIcon, darkIcon } from "../../helper/iconData";
import { FooterBtn, FooterContainer } from "./Footer.style";
import { useThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { myTheme, setMyTheme } = useThemeContext();
  const handleClick = () => {
    // if(myTheme === 'light'){
    //   setMyTheme('dark')
    // }else{
    //   setMyTheme('light')
    // }


    setMyTheme((prev)=> prev === 'light' ? 'dark' :'light')
  };
  return (
    <FooterContainer>
      <FooterBtn onClick={handleClick}>
        {myTheme === "light" ? lightIcon : darkIcon}
      </FooterBtn>
    </FooterContainer>
  );
};

export default Footer;
