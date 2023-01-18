import { Container, Title } from "../../styles/commonStyles";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <Container>
      <Title>MyWallet</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder="Name" />
        <StyledInput type="text" placeholder="E-mail" />
        <StyledInput type="password" placeholder="Password" />
        <StyledInput type="password" placeholder="Confirm Password" />
        <StyledButton type="submit">Sign Up</StyledButton>
      </StyledForm>

      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}
