import PageHeader from "@/components/ui/custom/PageHeader";
import TodoForm from "@/components/ui/custom/TodoForm";

export default function AddTask() {
  return (
    <>
      <PageHeader title="Add New Task"></PageHeader>
      <TodoForm />
    </>
  );
}
