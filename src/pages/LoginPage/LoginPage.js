import React, { useState } from "react";
import { Container, Title } from "../../styles/commonStyles";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";


export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    apiAuth
      .login(form)
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <Container>
      <Title>MyWallet</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          name="email"
          type="email"
          required
          placeholder="Username"
          value={form.email}
          onChange={handleForm}
        />
        <StyledInput
          name="password"
          type="password"
          required
          placeholder="Password"
          value={form.password}
          onChange={handleForm}
        />
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>

      <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}
