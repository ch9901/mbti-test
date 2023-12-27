import React, { useEffect, useState } from "react";
import { Container } from "../GlobalStyles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../contents/data/resultdata";
import styled from "styled-components";
import Button from "../components/Button";
import { BarLoader } from "react-spinners";

const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 40rem;
    height: 37rem;
  }
`;
const ResultNameWrap = styled.div`
  p {
    font-size: 3.5rem;
    font-weight: 550;
  }
  h1 {
    font-size: 5rem;
    color: #ff5100;
  }
`;
const ResultDesSum = styled.div`
  font-size: 3rem;
`;
const ResultDes = styled.div`
  margin-top: 2rem;
  width: 70rem;
  font-size: 2.5rem;
  font-weight: 400;
`;
const ResultLoading = styled.div`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;
const Result = () => {
  const [searchParmas] = useSearchParams();
  const [finalResultData, setFinalResultData] = useState({});
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const mbti = searchParmas.get("mbti");
  useEffect(() => {
    const result = ResultData.find((data) => data.mbti === mbti);
    setFinalResultData(result);
  }, [mbti]);
  setTimeout(() => {
    setloading(false);
  }, 1500);
  return (
    <>
      {loading ? (
        <Container style={{ justifyContent: "center" }}>
          <ResultLoading>결과를 불러오는 중 입니다 ...</ResultLoading>
          <BarLoader width={"70vw"} height={10} size={150}></BarLoader>
        </Container>
      ) : (
        <Container style={{ justifyContent: "center", gap: "5rem" }}>
          <ResultWrap>
            <ResultNameWrap>
              <p>내 결과는 {finalResultData.nameDes}</p>
              <h1>{finalResultData.name}</h1>
            </ResultNameWrap>
            <img src={finalResultData.img} alt="resultimg" />
            <ResultDesSum>{finalResultData.desSumm}</ResultDesSum>
            <ResultDes>{finalResultData.desc}</ResultDes>
          </ResultWrap>
          <Button
            onClick={goToHome}
            title={"테스트 다시하기"}
            width={75}
            height={8}
          />
        </Container>
      )}
    </>
  );
};

export default Result;
