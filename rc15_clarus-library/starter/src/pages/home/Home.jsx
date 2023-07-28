import React from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { CardContainer, HomeContainer, HomeImage } from "./Home.style";
// import homeImg from "../../assets/books.jpg";
// import { useBooksContext } from "../../context/BooksContext";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeImage>
        {/* <img src={homeImg} alt="Home"/> */}
      </HomeImage>
      <CardContainer>
        <Card />
      </CardContainer>
    </HomeContainer>
  );
};

export default Home;
