// import {Link} from 'react-router-dom'
import Button from "../../components/Button";
import Header from "../../components/Header";
import Imagem from "../../assets/banner.png";

import { Container, TextContent, Title, TitleHighLigth } from "./styles";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLigth>Implemente</TitleHighLigth> <br />O seu futuro
            global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare o seu novo desafio profissional, evoluindo em
            comunidades com os melhores experts.
          </TextContent>
          <Button title="Começar" variant="secondary" />
        </div>

        <div>
          <img src={Imagem} alt="Imagem do banner" />
        </div>
      </Container>
    </div>
  );
}
