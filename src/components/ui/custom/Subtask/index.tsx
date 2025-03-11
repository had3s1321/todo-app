interface SubtaskProps {
  children: React.ReactNode;
  name: string;
  isCompleted?: boolean;
}

const Subtask = ({ children, name }: SubtaskProps) => {
  return (
    <div className="relative inline-block h-[60px] w-full rounded-[30px] border bg-[var(--custom-light)]">
      <p
        title={name}
        className="ml-6 mr-16 h-full content-center overflow-hidden truncate whitespace-nowrap text-[16px]"
      >
        {name}
      </p>
      {children}
    </div>
  );
};

export default Subtask;
