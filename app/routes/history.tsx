import { Container, Card, Text, Group, Image, Anchor, Button } from "@mantine/core";
import { useActivities } from "~/contexts/ActivitiesContex";

export default function HistoryPage() {
  const { activities, updateActivity } = useActivities();

  const concludedActivities = activities.filter(
    (activity) => activity.status === "concluded"
  );

  const handleRevertStatus = (activityId: string) => {
    updateActivity(activityId, { status: "pending", statusDate: undefined, proof: undefined });
  };

  return (
    <Container size="sm" py="xl">
      {concludedActivities.length === 0 ? (
        <Text c="dimmed" ta="center">
          Nenhuma atividade concluída no momento.
        </Text>
      ) : (
        concludedActivities.map((activity) => (
          <Card key={activity.id} shadow="sm" padding="lg" mb="md">
            <Text size="lg" fw={500} mb="sm">
              {activity.name}
            </Text>
            <Text c="dimmed" mb="sm">
              Concluída em: {new Date(activity.statusDate as Date).toLocaleDateString()}
            </Text>

            {activity.proof && (
              <Group mb="sm">
                <Text fw={500}>Prova Anexada:</Text>
                <Anchor
                  href={URL.createObjectURL(activity.proof)}
                  download={`prova_${activity.name}.${activity.proof.type.split("/")[1]}`}
                >
                  Baixar Prova
                </Anchor>
              </Group>
            )}

            {activity.proof && activity.proof.type.startsWith("image/") && (
              <Image
                src={URL.createObjectURL(activity.proof)}
                alt={`Prova de ${activity.name}`}
                w={200}
                h={150}
                fit="contain"
                mb="sm"
              />
            )}

            <Button
              variant="outline"
              color="red"
              onClick={() => handleRevertStatus(activity.id)}
            >
              Reverter para Pendente
            </Button>
          </Card>
        ))
      )}
    </Container>
  );
}