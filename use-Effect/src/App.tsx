import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Details from "./components/Details";
import { DetailsProps } from "./Types";

function App() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [id, setId] = useState<number | undefined>(undefined);
  const [info, setInfo] = useState<DetailsProps | null>(null);

  useEffect(() => {
    const usersFetch = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_USERS_URL}${id || "users"}.json`
        );
        if (!response.ok) throw new Error(response.statusText);
        const usersList = await response.json();
        id ? setInfo(usersList) : setUsers(usersList);
      } catch (e) {
        console.error(e);
      }
    };
    if (info) setInfo(null);
    usersFetch();
  }, [id]);

  return (
    <>
      <List className="users">
        {users.map((user) => {
          return (
            <li
              key={user.id}
              onClick={() => {
                setId(user.id);
              }}
            >
              <p className="name">{user.name}</p>
            </li>
          );
        })}
      </List>
      {info && (
        <Details className="details">
          <img className="avatar" src={info.avatar} alt="image user" />
          <ul className="details">
            <li className="detail">
              <p>{info.details.city}</p>
            </li>
            <li className="detail">
              <p>{info.details.company}</p>
            </li>
            <li className="detail">
              <p>{info.details.position}</p>
            </li>
          </ul>
        </Details>
      )}
    </>
  );
}

export default App;
