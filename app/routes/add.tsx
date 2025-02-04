import { useState } from "react";
import { TextInput, Card, Group, Stack, Container, Title, Badge, ActionIcon } from "@mantine/core";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import type { DragEndEvent } from "@dnd-kit/core";
import { SortableItem } from "~/components/SortableItem";
import { useActivities } from "~/contexts/ActivitiesContex";
import type { Activity } from "~/contexts/ActivitiesContex";

export default function AddActivitiesPage() {
  const { activities, addActivity, removeActivity, setActivities } = useActivities();
  const [newActivity, setNewActivity] = useState<string>("");

  const pendingActivities = activities.filter(
    (activity) => activity.status === "pending"
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setActivities((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleAddActivity = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && newActivity.trim()) {
      addActivity(newActivity);
      setNewActivity("");
    }
  };

  return (
    <Container size="sm" py="xl">
      <Group align="flex-end" mb="lg">
        <TextInput
          placeholder="Digite uma atividade e pressione Enter"
          value={newActivity}
          onChange={(event) => setNewActivity(event.currentTarget.value)}
          onKeyDown={handleAddActivity}
          style={{ flex: 1 }}
        />
      </Group>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={pendingActivities.map(a => a.id)} strategy={verticalListSortingStrategy}>
          <Stack>
            {pendingActivities.map((activity: Activity) => (
              <SortableItem key={activity.id} id={activity.id}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Group align="center">
                    <Title order={4}>{activity.name}</Title>
                  </Group>
                  <Group mt="sm">
                    <Badge color="yellow">Teste</Badge>
                  </Group>
                </Card>
              </SortableItem>
            ))}
          </Stack>
        </SortableContext>
      </DndContext>
    </Container>
  );
}
