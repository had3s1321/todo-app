import { Progress } from "../ui/progress";

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="w-full">
      <div className="mb-3 flex justify-between text-[18px] font-semibold">
        <h3>Task Completed</h3>
        <span className="text-[var(--custom-primary)]">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
};

export default ProgressBar;
