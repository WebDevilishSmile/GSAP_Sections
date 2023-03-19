import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const GroupCards = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 64px;
  justify-content: space-between;
  padding-top: 122px;
`;

export const GroupCardsLeft = styled.div`
  display: flex;
  column-gap: 64px;
  @media (max-width: 1440px) {
    column-gap: 32px;
  }
  @media (max-width: 1280px) {
    column-gap: 16px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    column-gap: 0px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  width: fit-content;
  height: fit-content;
  row-gap: 16px;
  @media (max-width: 1280px) {
    width: 200px;
  }
  > h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 65px;
    line-height: 150.5%;
    @media (max-width: 1440px) {
      font-size: 45px;
      line-height: 100%;
    }
    @media (max-width: 1280px) {
      font-size: 35px;
      line-height: 80%;
    }
  }

  > p {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    width: 244px;
    text-align: center;
    @media (max-width: 1440px) {
      font-size: 18px;
      line-height: 18px;
      width: 230px;
    }
    @media (max-width: 1280px) {
      font-size: 16px;
      line-height: 18px;
      width: 200px;
    }
  }
`;

export const GroupCardsRight = styled.div`
  display: flex;
  column-gap: 64px;
  @media (max-width: 1440px) {
    column-gap: 32px;
  }
  @media (max-width: 1280px) {
    column-gap: 16px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    column-gap: 0px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* row-gap: 20px; */
  height: fit-content;
  width: 270px;
  padding: 48px 21px;
  flex: none;
  background: linear-gradient(
    203.29deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 98.13%
  );
  filter: drop-shadow(25px 50px 60px rgba(0, 0, 0, 0.3));
  box-shadow: 25px 50px 60px 0px #0000004d;
  border-radius: 10px;
  @media (max-width: 1440px) {
    width: fit-content;
    padding: 22px 18px;
  }

  > h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    height: fit-content;
    width: 200px;
    @media (max-width: 1440px) {
      width: 140px;
      font-size: 18px;
      line-height: 18px;
      height: fit-content;
    }
  }

  > p {
    margin-top: 5px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    width: 100%;
    max-width: 241px;
    @media (max-width: 1440px) {
      width: 180px;
      height: fit-content;
    }
  }
  > p:first-of-type {
    margin-top: 16px;
  }
`;
