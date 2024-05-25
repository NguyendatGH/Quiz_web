import { Button, Card, Divider, Flex, Typography } from "antd";

import styled from "styled-components";

export const Index = styled.div`
  width: 120px;
  height: auto;

  font-family: Poppins;
  text-align: center;
  margin-bottom: 20px;

  color: white;
  background-color: rgb(35, 59, 113);
  padding: 5px 6px;
  border-radius: 8px;

  transition: background-color 0.2s;
  &:hover {
    background-color: rgb(69, 101, 170);
  }
`;

export const Main = styled(Card)`
  width: 60%;
  background-color: rgb(255, 255, 255);
`;

export const Header = styled(Flex)`
  justify-content: space-between;
`;

export const Quest = styled(Flex)`
  flex-direction: column;

  height: 280px;

  gap: 30px;
`;
export const GroupTitle = styled(Flex)`
  flex-direction: column;
  height: 120px;
  gap: 20px;
`;
export const Clock = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid green;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TimeRemain = styled(Typography)`
  position: absolute;
  font-size: 32px;
  font-family: Poppins;
`;
export const Type = styled(Typography)`
  font-family: Poppins;
  font-size: 12px;
`;
export const Prototype = styled.div`
  display: flex;
  align-self: flex-end;
  width: 30px;
  height: 2px;
  background-color: green;
`;
export const Question = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  font-family: Poppins;
`;

export const Require = styled(Typography)`
  font-size: 14px;
`;

export const GroupAnswer = styled(Flex)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: center;
  justify-items: center;
`;
export const Key = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  height: 50px;
  font-size: Poppins;
`;

export const Bottom = styled(Flex)`
  flex-direction: column;
  align-items: center;
  font-family: Poppins;
`;
export const BottomLine = styled(Divider)`
  width: 80%;
  min-width: 80%;
`;

export const Skip = styled(Button)`
  width: 150px;
`;
