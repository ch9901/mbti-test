import React from "react";
import styled from "styled-components";

const ButtonBox = styled.button`
  background: #ff5100;
  border: transparent;
  border-radius: 1rem;
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  transition: 0.3s;
  &:hover {
    border: 0.2rem solid #ff5100;
    background: #ffdfd0;
    color: #ff5100;
    transform: scale(1.1);
  }
`;
const Button = ({ title, width = "50rem", height = "80rem", onClick }) => {
  return (
    <ButtonBox
      onClick={onClick}
      style={{ width: `${width}rem`, height: `${height}rem` }}
    >
      {title}
    </ButtonBox>
  );
};

export default Button;
