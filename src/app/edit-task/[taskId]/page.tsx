import PageHeader from "@/components/ui/custom/PageHeader";
import TodoForm from "@/components/ui/custom/TodoForm";

export default async function EditTask({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  return (
    <>
      <PageHeader title="Edit Task"></PageHeader>
      <TodoForm taskId={taskId} />
    </>
  );
}
