import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #8c11be;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 412px;
  padding: 25px 25px;
  position: relative;
`;
export const ContainerBtns = styled.div`
  display: flex;
  width: 100%;
  height: 114px;
  justify-content: space-between;
  margin-top: 13px;
`;

export const Btn = styled(Link)`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 9px 9px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
`;

export const LogBox = styled.div`
  width: 100%;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #868686;
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: calc(100% );
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 13px;
  background-color: #8c11be;
`;

export const GreetingMsg = styled.h1`
  color: #fff;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
`;
