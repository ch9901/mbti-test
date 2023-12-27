import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Icons from "../components/Icons";
import IconsBottom from "../components/IconsBottom";
import { Container } from "../GlobalStyles";
import { Helmet } from "react-helmet";
import favicon from "../contents/img/tropicana.ico";
const Title = styled.span`
  font-size: 4rem;
`;

const Titledes = styled.p`
  font-size: 2rem;
`;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100%;
  height: 50rem;
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StartButton = styled(Button)``;
const Home = () => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>나의 스낵 MBTI 찾기</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Icons />
      <MainWrap>
        <TitleWrap>
          <Title className="title">
            내 성격에 딱 !<br /> 어울리는 스낵은?
          </Title>
          <Titledes>스낵으로 보는 내 성격, SPTI</Titledes>
        </TitleWrap>
        <Link to={"/question"}>
          <StartButton
            className="startButton"
            title={"테스트 시작하기 !"}
            width={75}
            height={8}
          />
        </Link>
      </MainWrap>
      <IconsBottom />
    </Container>
  );
};

export default Home;
