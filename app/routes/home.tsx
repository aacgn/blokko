import React, { useState } from "react";
import { Container, TextInput, Button, Card, Stack, Title, Group, ActionIcon, Textarea, Badge, NavLink } from "@mantine/core";
import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { SortableItem } from "~/components/SortableItem";
import { useActivities } from "~/contexts/ActivitiesContex";
import { IconTrash, IconTag, IconFocus, IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router";

export default function ActivitiesPage() {
  const [newActivity, setNewActivity] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const navigate = useNavigate();

  const { activities, addActivity, setActivities } = useActivities();

  const pendingActivities = activities.filter(a => a.status === "pending");

  const handleAddActivity = () => {
    if (!newActivity.trim()) return;

      addActivity({
        name: newActivity,
        description,
        tags
      });
      setNewActivity("");
      setDescription("");
      setTags([]);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(prev => prev.filter(activity => activity.id !== id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setActivities(items => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Container size="sm" py="xl">
      <Stack>
        <TextInput
          placeholder="Digite uma atividade e pressione Enter"
          value={newActivity}
          onChange={(event) => setNewActivity(event.currentTarget.value)}
        />
        {newActivity.length > 0 && (
          <>
            <Textarea
              placeholder="Adicione uma descrição (opcional)"
              value={description}
              onChange={(event) => setDescription(event.currentTarget.value)}
            />
            <Group>
              {tags.map((tag, index) => (
                <Badge key={index} color="blue">{tag}</Badge>
              ))}
              <TextInput
                placeholder="Adicione uma tag..."
                rightSection={<IconTag size={16} />}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && event.currentTarget.value.trim()) {
                    setTags([...tags, event.currentTarget.value.trim()]);
                    event.currentTarget.value = "";
                  }
                }}
              />
            </Group>
          </>
        )}
        <Button onClick={() => handleAddActivity()}>Adicionar Atividade</Button>
        <Button
          variant="light"
          leftSection={<IconFocus size={14} />}
          rightSection={<IconArrowRight size={14} />}
          onClick={() => navigate("/focus")}
        >
          Modo de foco
        </Button>
      </Stack>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={pendingActivities.map(a => a.id)} strategy={verticalListSortingStrategy}>
          <Stack mt="lg">
            {pendingActivities.map(activity => (
              <SortableItem key={activity.id} id={activity.id}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Group justify="space-between" align="center">
                    <Title order={4}>{activity.name}</Title>
                    <ActionIcon color="red" onMouseDown={() => handleDeleteActivity(activity.id)}>
                      <IconTrash size={18} />
                    </ActionIcon>
                  </Group>
                  {activity.description && <p>{activity.description}</p>}
                  {activity.tags && (
                    <Group>
                      {activity.tags.map((tag, index) => (
                        <Badge key={index} color="blue">{tag}</Badge>
                      ))}
                    </Group>
                  )}
                </Card>
              </SortableItem>
            ))}
          </Stack>
        </SortableContext>
      </DndContext>
    </Container>
  );
}
