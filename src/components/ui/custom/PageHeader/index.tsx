import BackLink from "./BackLink";

const PageHeader = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="relative w-full">
      <h1 className="text-center text-[24px]">{title}</h1>
      <BackLink />
      {children}
    </div>
  );
};

export default PageHeader;
