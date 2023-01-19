import { Container } from "../../styles/commonStyles";
import { ContainerBtns, Btn, LogBox, ContainerHeader, GreetingMsg } from "./style";
import Logo from "../../assets/VectorOut.svg";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";


export default function HomePage() {
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
        <Btn>
          <img src={Plus} alt="Botão de adicionar" />
          Nova <br />
          Entrada
        </Btn>

        <Btn>
          <img src={Minus} alt="Botão de retirar" />
          Nova <br />
          Saída
        </Btn>
      </ContainerBtns>
    </Container>
  );
}



