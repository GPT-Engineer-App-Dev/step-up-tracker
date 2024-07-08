import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">FitTrack</h1>
        <div className="rounded-full bg-gray-200 p-2">
          <img src="/placeholder.svg" alt="User Profile" className="mx-auto object-cover w-10 h-10 rounded-full" />
        </div>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Today's Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h2 className="text-xl font-semibold">Steps</h2>
              <p>{data.steps}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Calories Burned</h2>
              <p>{data.caloriesBurned}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Active Minutes</h2>
              <p>{data.activeMinutes}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Weekly Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={data.weeklyProgress} />
        </CardContent>
      </Card>
    </div>
  );
};

const fetchDashboardData = async () => {
  // Mock data fetching
  return {
    steps: 12000,
    caloriesBurned: 500,
    activeMinutes: 60,
    weeklyProgress: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Steps",
          data: [12000, 15000, 8000, 14000, 13000, 16000, 17000],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    },
  };
};

export default Dashboard;