import * as S from "./styled.tsx";
// import img from "../.././assets/avatar.jpg";
export const Home = () => {
  return (
    <>
      <S.Index>Question 1</S.Index>
      <S.Main>
        <S.Quest>
          <S.Header>
            <S.GroupTitle>
              <S.Type>
                Easy Question
                <S.Prototype></S.Prototype>
              </S.Type>
              <S.Question>What is the biggest country in the world?</S.Question>
              <S.Require>Choose the best answer:</S.Require>
            </S.GroupTitle>
            <S.Clock>
              <S.TimeRemain>10:10</S.TimeRemain>
            </S.Clock>
          </S.Header>

          <S.GroupAnswer>
            <S.Key>Russia</S.Key>
            <S.Key>United States</S.Key>
            <S.Key>China</S.Key>
            <S.Key>India</S.Key>
          </S.GroupAnswer>
        </S.Quest>
        <S.Bottom>
          <S.BottomLine></S.BottomLine>
          <S.Skip>Skip this question?</S.Skip>
        </S.Bottom>
      </S.Main>
    </>
  );
};
