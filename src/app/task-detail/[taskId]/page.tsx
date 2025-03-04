import TaskDetailsClient from "@/components/taskDetails/TaskDetailsClient";
import PageHeader from "@/components/ui/custom/PageHeader";

import { EditTaskIcon } from "@/components/ui/icons";
import Link from "next/link";

export default async function TaskDetail({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  return (
    <>
      <PageHeader title="Task Details">
        <Link
          href={`/edit-task/${taskId}`}
          className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--custom-secondary)]"
        >
          <EditTaskIcon />
        </Link>
      </PageHeader>
      <TaskDetailsClient taskId={taskId} />
    </>
  );
}
