import img from "../../assets/avatar.jpg";
import * as S from "./styled";
export const Profile = () => {
  return (
    <>
      <S.Main>
        <S.User>
          <S.QuestImg src={img}></S.QuestImg>
          <S.Infor>
            <S.Name>Eimi chan</S.Name>
            <S.Point>100 point</S.Point>
          </S.Infor>
        </S.User>
      </S.Main>
    </>
  );
};
