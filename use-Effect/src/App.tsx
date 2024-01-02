import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Details from "./components/Details";
import { DetailsProps, User } from "./Types";
import Loading from "./components/Loading";
import iconLoading from "../public/loader.gif";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [id, setId] = useState<number | undefined>(undefined);
  const [info, setInfo] = useState<DetailsProps | null>(null);
  let loading = useRef<boolean>(false);

  useEffect(() => {
    const usersFetch = async () => {
      loading.current = true;
      try {
        const response = await fetch(
          `${import.meta.env.VITE_USERS_URL}${id || "users"}.json`
        );
        if (!response.ok) throw new Error(response.statusText);
        const usersList = await response.json();
        id ? setInfo(usersList) : setUsers(usersList);
        loading.current = false;
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
              className={`user ${id === user.id ? "selected" : ""}`}
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
      {info && <Details className="details" props={info} />}
      {loading.current && <Loading className="loading" url={iconLoading} />}
    </>
  );
}

export default App;
