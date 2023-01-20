import { Container, Title } from "../../styles/commonStyles";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import apiAuth from "../../services/apiAuth";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    //check password and confirmPassword
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // create body without confirmPassword
    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    apiAuth
      .register(body)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Title>MyWallet</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          name="name"
          value={form.name}
          required
          type="text"
          placeholder="Name"
          onChange={handleForm}
        />
        <StyledInput
          name="email"
          value={form.email}
          required
          type="email"
          placeholder="E-mail"
          onChange={handleForm}
        />
        <StyledInput
          name="password"
          value={form.password}
          required
          type="password"
          placeholder="Password"
          onChange={handleForm}
        />
        <StyledInput
          name="confirmPassword"
          value={form.confirmPassword}
          required
          type="password"
          placeholder="Confirm Password"
          onChange={handleForm}
        />
        <StyledButton type="submit">Sign Up</StyledButton>
      </StyledForm>

      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}
