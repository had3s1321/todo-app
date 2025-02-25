interface SubtaskProps {
  children: React.ReactNode;
  name: string;
  isCompleted?: boolean;
}

const Subtask = ({ children, name }: SubtaskProps) => {
  return (
    <div className="relative h-[60px] w-full rounded-[30px] border bg-[var(--custom-light)]">
      <p className="ml-6 mt-4 text-[16px]">{name}</p>
      {children}
    </div>
  );
};

export default Subtask;
