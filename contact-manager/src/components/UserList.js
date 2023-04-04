import UserCard from "./UserCard";

const UserList = ({ users = [], deleteUser }) => {
  return (
    <div className="row">
      {users.map((item) => (
        <div key={item.id} className="col p-2">
          <UserCard {...item} deleteUser={deleteUser} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
