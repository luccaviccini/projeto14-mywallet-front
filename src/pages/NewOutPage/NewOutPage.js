import { Container, ContainerHeader, GreetingMsg } from "../HomePage/style";

import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";

export default function NewInPage() {
  return (
    <Container>
      <ContainerHeader>
        <GreetingMsg>Nova Saida</GreetingMsg>
      </ContainerHeader>
      <StyledInput type="text" placeholder="Valor" />
      <StyledInput type="text" placeholder="Descrição" />
      <StyledButton type="submit">Salvar Saida</StyledButton>
    </Container>
  );
}
