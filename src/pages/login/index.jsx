import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import {
  Column,
  Container,
  CriarText,
  ExqueciText,
  Row,
  SubLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

export default function Login() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rapido em empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubLogin>Faça seu login e make the change.</SubLogin>
            <form>
              <Input placeholder="E-mail" type='text'  />
              <Input placeholder="Senha" type='password'  />
              <Button title="Entrar" variant="secondary" />
            </form>
            <Row>
              <ExqueciText>Esqueci minha senha</ExqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
}
