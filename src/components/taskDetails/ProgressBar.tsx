import { Progress } from "../ui/progress";

const ProgressBar = () => {
  return (
    <div className="w-full">
      <div className="mb-3 flex justify-between text-[18px] font-semibold">
        <h3>Task Completed</h3>
        <span className="text-[var(--custom-primary)]">50%</span>
      </div>
      <Progress value={50} />
    </div>
  );
};

export default ProgressBar;
