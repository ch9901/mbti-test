import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import { ProgressBar } from "react-bootstrap";
import { questiondata } from "../contents/data/questiondata";
import Button from "../components/Button";
import IconsBottom from "../components/IconsBottom";
import { useNavigate, createSearchParams } from "react-router-dom";

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
const QuestionTitle = styled.h1`
  font-size: 4rem;
`;
const ButtonWrap = styled.div`
  display: flex;
  gap: 3%;
`;

const Question = () => {
  const now = 60;
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    {
      id: "EI",
      score: 0,
    },
    {
      id: "NS",
      score: 0,
    },
    {
      id: "TF",
      score: 0,
    },
    {
      id: "JP",
      score: 0,
    },
  ]);
  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((item) =>
      item.id === type ? { id: item.id, score: item.score + no } : item
    );
    setQuestionNo(questionNo + 1);
    setTotalScore(newScore);

    if (questiondata.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acculate, current) =>
          acculate +
          (current.score >= 2
            ? current.id.substring(0, 1)
            : current.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }
  };

  return (
    <Container>
      <ProgressBar
        style={{ width: "90%", height: "2rem" }}
        now={(questionNo / questiondata.length) * 100}
        variant="dark"
        striped={true}
        animated={true}
      />
      <MainWrap>
        <QuestionTitle>{questiondata[questionNo].title}</QuestionTitle>
        <ButtonWrap className="buttonWrap">
          <Button
            title={questiondata[questionNo].answera}
            width={65}
            height={24}
            onClick={() => handleClickButton(1, questiondata[questionNo].type)}
          />
          <Button
            title={questiondata[questionNo].answerb}
            width={65}
            height={24}
            onClick={() => handleClickButton(0, questiondata[questionNo].type)}
          />
        </ButtonWrap>
      </MainWrap>
      <IconsBottom />
    </Container>
  );
};

export default Question;
