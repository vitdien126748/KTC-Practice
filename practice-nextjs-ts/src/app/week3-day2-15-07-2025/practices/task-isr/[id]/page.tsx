import TaskDetail from "@/components/UpdateForm";
import { Task } from "@/types";

export const dynamic = "force-static";

export const generateStaticParams = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/workspaces/tasks`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );
  const tasks: Task[] = await response.json();

  if (!tasks || tasks.length === 0) {
    return [];
  }

  return tasks.slice(0, 10).map((task: Task) => ({
    id: task.id?.toString() || "",
  }));
};

const TaskDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/workspaces/tasks/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
      next: { revalidate: 10 },
    }
  );

  const task: Task = await response.json();

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Task Details
        </h1>
        <TaskDetail task={task} />
      </div>
    </div>
  );
};

export default TaskDetailsPage;
