import React from "react";
import { iconImg } from "../util";
import styled from "styled-components";

const iconNameArr = [
  "vodka",
  "tropicana",
  "redbull",
  "milkjelly",
  "fire",
  "honey",
  "together",
  "ace",
];

const IconsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  img {
    width: 11rem;
    height: 11rem;
  }
`;
const Icons = () => {
  return (
    <IconsWrap className="iconWrap">
      {iconNameArr.map((name, index) => (
        <img className="icon" key={index} src={iconImg(name)} alt="iconimg" />
      ))}
    </IconsWrap>
  );
};

export default Icons;
