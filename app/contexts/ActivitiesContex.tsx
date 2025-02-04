import { createContext, useContext, useState, useEffect } from "react";

type ActivityStatus = "pending" | "concluded";

export interface Activity {
  id: string;
  name: string;
  status?: ActivityStatus;
  proof?: File;
  statusDate?: Date;
}

interface ActivitiesContextProps {
  activities: Activity[];
  addActivity: (name: string) => void;
  removeActivity: (id: string) => void;
  updateActivity: (id: string, data: Partial<Activity>) => void;
  setActivities: React.Dispatch<React.SetStateAction<Activity[]>>;
}

const ActivitiesContext = createContext<ActivitiesContextProps | undefined>(undefined);

export function useActivities() {
  const context = useContext(ActivitiesContext);
  if (!context) {
    throw new Error("useActivities must be used within an ActivitiesProvider");
  }
  return context;
}

export function ActivitiesProvider({ children }: { children: React.ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>(() => {
    const storedActivities = localStorage.getItem("activities");
    return storedActivities ? JSON.parse(storedActivities) : [];
  });

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const addActivity = (name: string) => {
    setActivities((prev) => {
      const newActivities = [...prev, { id: crypto.randomUUID(), name, status: "pending" as ActivityStatus }];
      localStorage.setItem("activities", JSON.stringify(newActivities));
      return newActivities;
    });
  };

  const updateActivity = (id: string, data: Partial<Activity>) => {
    setActivities((prev) => {
      const updatedActivities = prev.map((act) => (act.id === id ? { ...act, ...data } : act));
      localStorage.setItem("activities", JSON.stringify(updatedActivities));
      return updatedActivities;
    });
  };

  const removeActivity = (id: string) => {
    setActivities((prev) => {
      const updatedActivities = prev.filter((act) => act.id === id);
      localStorage.setItem("activities", JSON.stringify(updatedActivities));
      return updatedActivities;
    });
  };

  return (
    <ActivitiesContext.Provider value={{ activities, addActivity, updateActivity, setActivities, removeActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
}
