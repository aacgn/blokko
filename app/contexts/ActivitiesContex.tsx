import { createContext, useContext, useState, useEffect } from "react";

type ActivityStatus = "pending" | "concluded";

interface Activity {
  id: string;
  name: string;
  description?: string;
  tags?: string[];
  status?: ActivityStatus;
  proof?: File;
  statusDate?: Date;
}

interface ActivitiesContextProps {
  activities: Activity[];
  addActivity: (activity: Omit<Activity, "id" | "status">) => void;
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

  function addActivity(activity: Omit<Activity, "id" | "status">) {
    setActivities(prev => [...prev, { id: crypto.randomUUID(), status: "pending", ...activity }]);
  };
  
  const updateActivity = (id: string, data: Partial<Activity>) => {
    setActivities((prev) => prev.map((act) => (act.id === id ? { ...act, ...data } : act)));
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
