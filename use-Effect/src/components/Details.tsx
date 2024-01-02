import { PropsWithChildren } from "react";
import { DetailsProps } from "../Types";

const Details = ({
  className,
  props,
  children,
}: PropsWithChildren<{ className: string; props: DetailsProps }>) => {
  return (
    <section className={className}>
      {children}
      <img className="avatar" src={props.avatar} alt="image user" />
      <ul className="details-list">
        <li className="detail">
          <p>{props.name}</p>
        </li>
        <li className="detail">
          <p>City: {props.details.city}</p>
        </li>
        <li className="detail">
          <p>Company: {props.details.company}</p>
        </li>
        <li className="detail">
          <p>Position: {props.details.position}</p>
        </li>
      </ul>
    </section>
  );
};

export default Details;
