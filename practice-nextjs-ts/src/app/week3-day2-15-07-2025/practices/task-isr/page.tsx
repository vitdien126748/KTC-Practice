import { Task } from "@/types";
import Link from "next/dist/client/link";

export const dynamic = "force-static";
const TaskISRPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/workspaces/tasks`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
      next: {
        revalidate: 10, // Revalidate every 10 seconds
      },
    }
  );
  const tasks: Task[] = await response.json();

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        Task - ISR
      </h1>
      <Tasks tasks={tasks} />
    </div>
  );
};

export default TaskISRPage;

const Tasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl shadow-md text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              ID
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              Title
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              Description
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              Assignee ID
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b last:border-none">
              <td className="px-4 py-2">{task.id}</td>
              <td className="px-4 py-2">{task.title}</td>
              <td className="px-4 py-2">{task.description}</td>
              <td className="px-4 py-2">{task.assignee_id}</td>
              <td className="px-4 py-2">
                <Link
                  href={`/week3-day2-15-07-2025/practices/task-isr/${task.id}`}
                  className="text-indigo-600 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
