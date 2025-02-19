export default async function EditTask({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  return <div>EditTask: {taskId}</div>;
}
