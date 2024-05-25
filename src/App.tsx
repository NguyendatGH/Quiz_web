// import { Home } from "./component/Home";
import "./App.css";
import { Profile } from "./component/Profile/index.tsx";
import * as S from "./styled.tsx";

function App() {
  return (
    <>
      <S.RootPage>
        <S.Wrapper>
          {/* <Home /> */}
          <Profile />
        </S.Wrapper>
      </S.RootPage>
    </>
  );
}

export default App;
