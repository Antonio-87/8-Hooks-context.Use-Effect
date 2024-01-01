import { PropsWithChildren } from "react";

const Loading = ({
  className,
  url,
  children,
}: PropsWithChildren<{ className: string; url: string }>) => {
  return (
    <>
      <img className={className} src={url} alt="img" />
      {children}
    </>
  );
};
export default Loading;
