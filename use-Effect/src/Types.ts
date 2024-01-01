export type User = {
  id: number;
  name: string;
};

export type Users = {
  users: User[];
};

export type DetailsProps = {
  id: string;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};
