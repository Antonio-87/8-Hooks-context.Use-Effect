import { PropsWithChildren } from "react";
import { DetailsProps } from "../Types";

const Details = ({
  className,
  props,
  children,
}: PropsWithChildren<{ className: string; props: DetailsProps }>) => {
  return (
    <section className={className}>
      <img className="avatar" src={props.avatar} alt="image user" />
      <ul className="details">
        <li className="detail">
          <p>{props.details.city}</p>
        </li>
        <li className="detail">
          <p>{props.details.company}</p>
        </li>
        <li className="detail">
          <p>{props.details.position}</p>
        </li>
        {children}
      </ul>
    </section>
  );
};

export default Details;
