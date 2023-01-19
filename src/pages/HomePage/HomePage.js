import { Container } from "./style";
import {
  ContainerBtns,
  Btn,
  LogBox,
  ContainerHeader,
  GreetingMsg,
} from "./style";
import Logo from "../../assets/VectorOut.svg";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
//import { useNavigate } from "react-router-dom";

export default function HomePage() {
  //const navigate = useNavigate();

  return (
    <Container>
      <ContainerHeader>
        <GreetingMsg>Olá, Fulano</GreetingMsg>
        <img src={Logo} alt="Logo MyWallet" />
      </ContainerHeader>
      <LogBox>
        Não há registros de <br /> entrada ou saída
      </LogBox>
      <ContainerBtns>
        <Btn to="/nova-entrada">
          <img src={Plus} alt="Botão de adicionar" />
          Nova <br />
          Entrada
        </Btn>

        <Btn to="/nova-saida">
          <img src={Minus} alt="Botão de retirar" />
          Nova <br />
          Saída
        </Btn>
      </ContainerBtns>
    </Container>
  );
}
