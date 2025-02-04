import React, { useState } from "react";
import { Container, Text, Button, FileInput, Group, Title } from "@mantine/core";
import { useActivities } from "~/contexts/ActivitiesContex";

export default function ActivitiesPage() {
  const { activities, updateActivity } = useActivities();
  const [file, setFile] = useState<File | null>(null);

  const currentActivity = activities.find(activity => activity.status === 'pending');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!currentActivity || !file) return;

    updateActivity(currentActivity.id, { proof: file, status: "concluded", statusDate: new Date() });
    setFile(null);
  };

  if (!currentActivity) {
    return (
      <Container size="sm" py="xl">
        <Text c="dimmed" ta="center">
          Não há atividades pendentes no momento.
        </Text>
      </Container>
    );
  }

  return (
    <Container size="sm" py="xl">
      <Title size="lg" mb="md">
        {currentActivity.name}
      </Title>
      <form onSubmit={handleSubmit}>
        <FileInput
          label="Anexar imagem da prova"
          placeholder="Escolha uma imagem"
          value={file}
          onChange={setFile}
          mb="md"
        />
        <Group>
          <Button type="submit" disabled={!file}>
            Enviar Prova
          </Button>
        </Group>
      </form>
    </Container>
  );
}