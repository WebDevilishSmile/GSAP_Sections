import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const GroupCards = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  width: 100%;
  padding: 0px 64px;
`;

export const GroupCardsLeft = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 300px); */
  column-count: 2;
  column-gap: 64px;
  row-gap: 16px;
  @media (max-width: 1440px) {
    column-gap: 32px;
  }
  @media (max-width: 1366px) {
    column-gap: 12px;
  }
  @media (max-width: 1280px) {
    column-gap: 16px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    column-gap: 0px;
  }
`;

export const GroupCardsRight = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 300px); */
  column-count: 2;
  column-gap: 64px;
  @media (max-width: 1440px) {
    column-gap: 32px;
  }
  @media (max-width: 1366px) {
    column-gap: 12px;
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
  width: 270px;
  height: 100%;
  min-height: 250px;
  height: fit-content;
  padding: 48px 32px;
  flex: none;
  break-inside: avoid-column;
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
