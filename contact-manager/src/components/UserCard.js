const UserCard = ({ id, firstName, lastName, email, deleteUser }) => {
  return (
    <div className="card" style={{ width: "max-content" }}>
      <div className="card-body">
        <h5 className="card-title">
          {firstName} {lastName}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
        <div className="p-2 d-flex justify-content-end">
          <button className="btn btn-danger" onClick={() => deleteUser(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
