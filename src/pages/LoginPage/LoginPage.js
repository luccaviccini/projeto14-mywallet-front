import React from "react";
import { Container, Title } from "../../styles/commonStyles";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/cadastro");
  }


  return (
    <Container> 
      <Title>MyWallet</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder="Username" />
        <StyledInput type="password" placeholder="Password" />
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>

      <StyledLink to="/cadastro">
        Primeira vez? Cadastre-se!
      </StyledLink>
    </Container>
  );
}

