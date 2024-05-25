import { Card, Flex, Typography } from "antd";
import styled from "styled-components";

export const Main = styled(Card)`
  width: 60%;
  background-color: rgb(255, 255, 255);
`;
export const User = styled(Flex)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const QuestImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;
export const Infor = styled(Flex)`
  flex-direction: column;
`;
export const Name = styled(Typography)``;
export const Point = styled.span``;
