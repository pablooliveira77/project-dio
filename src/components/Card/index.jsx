import {
  CardContainer,
  Content,
  HasInfo,
  ImagemBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

export default function Card() {
  return (
    <CardContainer>
      <ImagemBackground src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Wy-PelspmwmPG3lcLiqKPjLLzcc61ytF4g&s" />
      <Content>
        <UserInfo>
          <UserPicture src='https://img.myloview.com.br/quadros/user-icon-human-person-symbol-avatar-login-sign-700-259624278.jpg' />
          <div>
            <h4>Pablo Lima</h4>
            <p>há 30 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito o curso de html e cssno bootcamp dio global<strong>...saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JAVASCRIPT</h4>
          <p>10</p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}
