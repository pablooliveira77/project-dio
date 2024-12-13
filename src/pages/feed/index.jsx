import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

import {
  Container,
  Column,
  Title,
  TitleHighLigth,
} from "./styles";

export default function Feed() {
  return (
    <div className="App">
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLigth>Ranking Top 5 da semana</TitleHighLigth>
          <UserInfo
            nome="Pablo Lima"
            imagem="https://img.myloview.com.br/quadros/user-icon-human-person-symbol-avatar-login-sign-700-259624278.jpg"
            percentual={50}
          />
          <UserInfo
            nome="Pablo Lima"
            imagem="https://img.myloview.com.br/quadros/user-icon-human-person-symbol-avatar-login-sign-700-259624278.jpg"
            percentual={45}
          />
          <UserInfo
            nome="Pablo Lima"
            imagem="https://img.myloview.com.br/quadros/user-icon-human-person-symbol-avatar-login-sign-700-259624278.jpg"
            percentual={37}
          />
          <UserInfo
            nome="Pablo Lima"
            imagem="https://img.myloview.com.br/quadros/user-icon-human-person-symbol-avatar-login-sign-700-259624278.jpg"
            percentual={75}
          />
          <UserInfo
            nome="Pablo Lima"
            imagem="https://img.myloview.com.br/quadros/user-icon-human-person-symbol-avatar-login-sign-700-259624278.jpg"
            percentual={10}
          />
          <UserInfo
            nome="Pablo Lima"
            imagem="https://img.myloview.com.br/quadros/user-icon-human-person-symbol-avatar-login-sign-700-259624278.jpg"
            percentual={95}
          />
          <UserInfo
            nome="Pablo Lima"
            imagem="https://img.myloview.com.br/quadros/user-icon-human-person-symbol-avatar-login-sign-700-259624278.jpg"
            percentual={50}
          />
        </Column>
      </Container>
    </div>
  );
}
