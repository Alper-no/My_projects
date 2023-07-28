import React from "react";
import { CardButton, CardContainer, CardHeader, CardMedia } from "./Card.style";
import defaultImg from "../../assets/book.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({item}) => {
  return (
    <CardContainer>Card
      <CardHeader></CardHeader>
      <CardMedia/>
      <CardButton>View More</CardButton>
    </CardContainer>
  )
}

export default Card