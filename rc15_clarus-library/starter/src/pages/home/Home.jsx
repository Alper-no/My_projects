import React from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { CardContainer, HomeContainer, HomeImage } from "./Home.style";
import { useBooksContext } from "../../context/Books.Context";
import homeImg from "../../assets/books.jpg";


const Home = () => {
  const { myData } = useBooksContext();
  return (
    <HomeContainer>
      <Header />
      {myData.length ? (
        <CardContainer wrap ='wrap'>
          {myData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </CardContainer>
      ) : (
        <HomeImage>
          <img src={homeImg} alt="Home" />
        </HomeImage>
      )}
    </HomeContainer>
  );
};

export default Home;
