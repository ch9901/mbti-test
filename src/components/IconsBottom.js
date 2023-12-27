import React from "react";
import styled from "styled-components";
import { iconImg } from "../util";

const iconNameArr = [
  "dejawa",
  "bbangttoa",
  "shrimp",
  "tonicwater",
  "mintcandy",
  "tosipop",
  "ojing",
  "yanggang",
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
const IconsBottom = () => {
  return (
    <IconsWrap className="iconWrap">
      {iconNameArr.map((name, index) => (
        <img className="icon" key={index} src={iconImg(name)} alt="iconimg" />
      ))}
    </IconsWrap>
  );
};

export default IconsBottom;
