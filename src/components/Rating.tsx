import React, { useState } from "react";
import StarIcon from "./StarIcon";
import Wrapper from "./Wrapper";
import styled from 'styled-components'
import { motion } from 'framer-motion'



interface PropTypes {
  setRating: Function;
}


const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;


    & > button {
      border-radius: 50%;
      background-color: hsl(213, 19%, 23%);
      color: hsl(217, 12%, 63%);
      font-size: 1.1rem;
      height: 40px;
      border: none;
      width: 40px;
      cursor: pointer;
      transition: 200ms background linear;
    }

    .clicked {
        background-color: hsl(25, 97%, 53%);
    }

`


const SubmitButton = styled.button`
    background-color: hsl(25, 97%, 53%);
    font-size: 1.5rem;
    border-radius: 30px;
    color: white;
    padding: .3rem 0;


    &:disabled {
      opacity: 0.7;
      cursor: no-drop;
    }

`

const Rating = ({ setRating }: PropTypes) => {
    const [clickedOn, setClickedOn] = useState<boolean[]>([false, false, false, false, false])
    const [rate, setRate] = useState<number | boolean>(false)



const handleClickedOn = (e: any) => {
    let index = +e.target.innerText;
    setRate(index)
    let arr = [false, false, false, false, false]
    arr[index - 1] = true;
    setClickedOn(arr)
}

  return (
    <Wrapper>
      <StarIcon />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Buttons>
        <button onClick={handleClickedOn} className={clickedOn[0] ? 'clicked' : ''}>1</button>
        <button onClick={handleClickedOn} className={clickedOn[1] ? 'clicked' : ''}>2</button>
        <button onClick={handleClickedOn} className={clickedOn[2] ? 'clicked' : ''}>3</button>
        <button onClick={handleClickedOn} className={clickedOn[3] ? 'clicked' : ''}>4</button>
        <button onClick={handleClickedOn} className={clickedOn[4] ? 'clicked' : ''}>5</button>
      </Buttons>
      <SubmitButton disabled={rate ? false : true} onClick={() => setRating(rate)}>Submit</SubmitButton>
    </Wrapper>
  );
};

export default Rating;
