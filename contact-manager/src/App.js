import { useCallback, useMemo, useState } from "react";
import AddUserForm from "./components/AddUserForm";
import SearchBox from "./components/SeachBox";
import UserList from "./components/UserList";

export default function App() {
  const [usersData, setUserData] = useState([]);
  const [search, setSearch] = useState("");

  const addUser = useCallback(
    (newUser) => {
      setUserData([...usersData, newUser]);
    },
    [usersData]
  );

  const deleteUser = useCallback(
    (id) => {
      setUserData(usersData.filter((user) => user.id !== id));
    },
    [usersData]
  );

  const filteredUsers = useMemo(() => {
    if (search.length === 0) return [...usersData];
    return usersData.filter(({ firstName, lastName, email }) => {
      if (firstName.includes(search)) {
        return true;
      }
      if (lastName.includes(search)) {
        return true;
      }
      if (email.includes(search)) {
        return true;
      }
      return false;
    });
  }, [search, usersData]);

  return (
    <div className="container">
      <div className="border p-2">
        <AddUserForm addUser={addUser} />
      </div>
      <div className="m-2">
        <SearchBox search={search} setSearch={setSearch} />
      </div>
      <div className="mt-4">
        <UserList deleteUser={deleteUser} users={filteredUsers} />
      </div>
    </div>
  );
}
