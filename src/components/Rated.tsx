import React from "react";
import Wrapper from "./Wrapper";
import styled from "styled-components";

interface PropTypes {
  rating: string | boolean;
}

const ThankYouImage = styled.img`
    height: 120px;
    object-fit: contain;

`

const GivenRating = styled.h5`
  color: hsl(25, 97%, 53%);
  background-color: hsl(213, 19%, 23%);
  border-radius: 20px;
  width: max-content;
  padding: .4rem .7rem;
  margin: auto;

`

const Rated = ({ rating }: PropTypes) => {
  return (
    <Wrapper>
      <ThankYouImage
        src="https://chriskorsak.github.io/interactive-rating-component/images/illustration-thank-you.svg"
        alt="thank you image"
      />
      <GivenRating>You selected {rating} out of 5</GivenRating>
      <h1>Thank You!</h1>
      <p>
      We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p>
    </Wrapper>
  );
};

export default Rated;
