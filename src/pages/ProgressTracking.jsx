import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";

const ProgressTracking = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["progressTrackingData"],
    queryFn: fetchProgressTrackingData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Progress Tracking</h1>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Monthly Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={data.monthlyProgress} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Yearly Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={data.yearlyProgress} />
        </CardContent>
      </Card>
    </div>
  );
};

const fetchProgressTrackingData = async () => {
  // Mock data fetching
  return {
    monthlyProgress: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Steps",
          data: [30000, 35000, 40000, 45000],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    },
    yearlyProgress: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Steps",
          data: [120000, 150000, 180000, 200000, 220000, 250000, 270000, 300000, 320000, 350000, 370000, 400000],
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
        },
      ],
    },
  };
};

export default ProgressTracking;