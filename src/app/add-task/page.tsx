import PageHeader from "@/components/ui/custom/PageHeader";
import BackLink from "@/components/ui/custom/PageHeader/BackLink";
import TodoForm from "@/components/ui/custom/TodoForm";

export default function AddTask() {
  return (
    <>
      <PageHeader title="Add New Task">
        <BackLink />
      </PageHeader>
      <TodoForm />
    </>
  );
}
