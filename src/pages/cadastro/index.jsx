import Button from "../../components/Button";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import {
  Column,
  Container,
  SubLogin,
  CriarText,
  LoginText,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({
    nome: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Email não é valido")
      .required("Email não é valido"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("No minimo 3 caracteres"),
  })
  .required();

export default function Cadastro() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(isValid, errors);

  const onSubmit = (data) => console.log(data);

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
            <TitleLogin>Começe agora gratis</TitleLogin>
            <SubLogin>Crie sua conta e make the change.</SubLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="nome"
                placeholder="Nome completo"
                type="text"
              />
              <Input
                control={control}
                name="email"
                placeholder="E-mail"
                type="text"
              />
              <Input
                control={control}
                name="password"
                placeholder="Senha"
                type="password"
              />
              <Button title="Criar conta" variant="secondary" type="submit" />
            </form>
          </Wrapper>
          <CriarText>
            Ao clicar em "criar conta grátis", declaro que aceito a Política de
            Privacidade e Termos de Uso da DIO
          </CriarText>
          <LoginText>
            Já tem uma conta? <a href="/login">Entrar</a>
          </LoginText>
        </Column>
      </Container>
    </div>
  );
}
