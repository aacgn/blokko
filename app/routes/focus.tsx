import React, { useState } from "react";
import { Container, Title, Button, FileInput, Group, Text } from "@mantine/core";
import { useActivities } from "~/contexts/ActivitiesContex";
import { useNavigate } from "react-router";

export default function FocusModePage() {
  const { activities, updateActivity } = useActivities();
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const pendingActivities = activities.filter(a => a.status === "pending");
  const currentActivity = pendingActivities[0];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!currentActivity || !file) return;
    updateActivity(currentActivity.id, { proof: file, status: "concluded", statusDate: new Date() });
    setFile(null);
  };

  if (!currentActivity) {
    return (
      <Container size="sm" py="xl">
        <Text>Não há atividades pendentes.</Text>
        <Button onClick={() => navigate("/")}>Voltar</Button>
      </Container>
    );
  }

  return (
    <Container size="sm" py="xl">
      <Title mb="md">{currentActivity.name}</Title>
      <form onSubmit={handleSubmit}>
        <FileInput
          label="Anexar imagem da prova"
          placeholder="Escolha uma imagem"
          value={file}
          onChange={setFile}
          mb="md"
        />
        <Group>
          <Button type="submit" disabled={!file}>Concluir Atividade</Button>
          <Button variant="outline" onClick={() => navigate("/")}>Voltar</Button>
        </Group>
      </form>
    </Container>
  );
}
