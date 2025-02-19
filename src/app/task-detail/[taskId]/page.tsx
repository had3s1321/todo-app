export default async function TaskDetail({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  return <div>TaskDetail: {taskId}</div>;
}
