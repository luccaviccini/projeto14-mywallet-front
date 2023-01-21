import { Container, ContainerHeader, GreetingMsg } from "../HomePage/style";

import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import { apiEntry } from "../../services/apiEntry";
import StyledForm from "../../components/StyledForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export default function NewInPage() {
  const [form, setForm] = useState({ value: "", description: "" });
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const body = { ...form, type: "income"};
    apiEntry
      .newEntry(body, user.token)
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
      <ContainerHeader>
        <GreetingMsg>Nova Entrada</GreetingMsg>
      </ContainerHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          name="value"
          type="number"
          required
          placeholder="Valor"
          step="0.01"
          value={form.value}
          onChange={handleForm}
        />
        <StyledInput
          name="description"
          type="text"
          required
          placeholder="Descrição"
          value={form.description}
          onChange={handleForm}
        />
        <StyledButton type="submit">Salvar Entrada</StyledButton>
      </StyledForm>
    </Container>
  );
}
