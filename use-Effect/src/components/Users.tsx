import { PropsWithChildren } from "react";

const List = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => {
  return <ul className={className}>{children}</ul>;
};

export default List;
