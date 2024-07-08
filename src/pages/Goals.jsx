import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";

const Goals = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["goals"],
    queryFn: fetchGoals,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Goals</h1>
        <Button>Add Goal</Button>
      </header>
      {data.map((goal) => (
        <Card key={goal.id}>
          <CardHeader>
            <CardTitle>{goal.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{goal.description}</p>
            <Progress value={goal.progress} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const fetchGoals = async () => {
  // Mock data fetching
  return [
    {
      id: 1,
      title: "Run 5km",
      description: "Complete a 5km run in under 30 minutes.",
      progress: 70,
    },
    {
      id: 2,
      title: "Lose 5kg",
      description: "Lose 5kg of body weight in 2 months.",
      progress: 50,
    },
  ];
};

export default Goals;