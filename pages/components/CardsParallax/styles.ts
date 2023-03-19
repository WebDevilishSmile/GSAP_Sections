import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 476px) {
    display: flex;
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
  > h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 65px;
    line-height: 70px;
    max-width: 365px;
    text-align: center;
    @media (max-width: 1440px) {
      font-size: 45px;
      line-height: 100%;
    }
    @media (max-width: 1366px) {
      font-size: 40px;
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
    width: 210px;
    text-align: center;
    @media (max-width: 1440px) {
      font-size: 18px;
      line-height: 18px;
      width: 190px;
    }
    @media (max-width: 1280px) {
      font-size: 16px;
      line-height: 18px;
      width: 170px;
    }
  }
`;
