import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const ActivityLog = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["activityLog"],
    queryFn: fetchActivityLog,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Activity Log</h1>
        <Button>Add Activity</Button>
      </header>
      {data.map((activity) => (
        <Card key={activity.id}>
          <CardHeader>
            <CardTitle>{activity.type}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Date: {activity.date}</p>
            <p>Duration: {activity.duration} minutes</p>
            <p>Calories Burned: {activity.caloriesBurned}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const fetchActivityLog = async () => {
  // Mock data fetching
  return [
    {
      id: 1,
      date: "2023-10-01",
      type: "Running",
      duration: 30,
      caloriesBurned: 300,
    },
    {
      id: 2,
      date: "2023-10-02",
      type: "Cycling",
      duration: 45,
      caloriesBurned: 400,
    },
  ];
};

export default ActivityLog;