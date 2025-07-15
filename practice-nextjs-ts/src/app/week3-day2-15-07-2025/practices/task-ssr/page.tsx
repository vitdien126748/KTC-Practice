import { Task } from "@/types";
import Link from "next/dist/client/link";

export const dynamic = "force-dynamic";

const TaskSSRPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/workspaces/tasks`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );
  const tasks: Task[] = await response.json();
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Task - SSR
        </h1>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskSSRPage;

const Tasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Title
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Description
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Assignee ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b last:border-none">
              <td className="px-4 py-2 text-sm">{task.id}</td>
              <td className="px-4 py-2 text-sm">{task.title}</td>
              <td className="px-4 py-2 text-sm">{task.description}</td>
              <td className="px-4 py-2 text-sm">{task.assignee_id}</td>
              <td className="px-4 py-2 text-sm">
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
