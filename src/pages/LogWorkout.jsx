import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";

const workoutSchema = z.object({
  type: z.string().min(1, "Workout type is required"),
  duration: z.number().min(1, "Duration must be at least 1 minute"),
  intensity: z.string().min(1, "Intensity is required"),
  notes: z.string().optional(),
});

const LogWorkout = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(workoutSchema),
    defaultValues: {
      type: "",
      duration: "",
      intensity: "",
      notes: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Workout logged:", data);
    navigate("/activity-log");
  };

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Log Workout</h1>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Workout Type</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Running" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration (minutes)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g., 30" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="intensity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Intensity</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., High" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Any additional notes..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Log Workout</Button>
        </form>
      </Form>
    </div>
  );
};

export default LogWorkout;