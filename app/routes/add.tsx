import { useState } from "react";
import { TextInput, Button, Card, Group, Stack, Container, Title } from "@mantine/core";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { SortableItem } from "~/components/SortableItem";

import type { DragEndEvent } from "@dnd-kit/core";
import { useActivities } from "~/contexts/ActivitiesContex";

export default function AddActivitiesPage() {
  const { activities, addActivity, setActivities } = useActivities();
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

  return (
    <Container size="sm" py="xl">
      <Group align="flex-end" mb="lg">
        <TextInput
          placeholder="Digite uma atividade"
          value={newActivity}
          onChange={(event) => setNewActivity(event.currentTarget.value)}
          style={{ flex: 1 }}
        />
        <Button onClick={() => { if (newActivity.trim()) addActivity(newActivity); setNewActivity(""); }}>Adicionar</Button>
      </Group>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={pendingActivities.map(a => a.id)} strategy={verticalListSortingStrategy}>
          <Stack>
            {pendingActivities.map((activity) => (
              <SortableItem key={activity.id} id={activity.id}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Title order={4}>{activity.name}</Title>
                </Card>
              </SortableItem>
            ))}
          </Stack>
        </SortableContext>
      </DndContext>
    </Container>
  );
}
