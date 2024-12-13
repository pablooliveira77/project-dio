import { Container, Progress, NameText, UserPicture } from "./styles";

export default function UserInfo({nome, imagem, percentual}) {
  return <Container>
    <UserPicture src={imagem} />
    <div>
      <NameText>{nome}</NameText>
      <Progress percentual={percentual} />
    </div>
  </Container>;
}
