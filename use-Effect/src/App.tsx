import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/Users";

function App() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [id, setId] = useState<string | undefined>("");
  const idUser = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const usersFetch = async () => {
      console.log(import.meta.env.VITE_USERS_URL);
      const response = await fetch(import.meta.env.VITE_USERS_URL);
      const usersList = await response.json();
      setUsers(usersList);
    };
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
                setId(idUser.current?.dataset.id);
              }}
              data-id={user.name}
              ref={idUser}
            >
              <p className="name">{user.name}</p>
            </li>
          );
        })}
      </List>
    </>
  );
}

export default App;
