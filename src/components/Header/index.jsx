import Button from "../Button";
import Logo from "../../assets/logo-dio.png";
import {
  BuscarInputContainer,
  //   Column,
  Container,
  Input,
  Menu,
  MenuRigth,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

export default function Header({ autenticado }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="logo" />
          {autenticado && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar" />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          )}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://img.myloview.com.br/quadros/user-icon-human-person-symbol-avatar-login-sign-700-259624278.jpg" />
          ) : (
            <>
              <MenuRigth href="#">Home</MenuRigth>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
