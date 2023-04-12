const ScoreTable = ({ title, data }) => (
  <>
    <h4>{title}</h4>
    <div>
      {data.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Question</th>
              <th>Response</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (
                { id, leftOperand, rightOperand, operator, response, answer },
                index
              ) => (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>
                    {leftOperand} {operator} {rightOperand}
                  </td>
                  <td>{response || "NA"}</td>
                  <td>{answer}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        <>No data</>
      )}
    </div>
  </>
);

export default ScoreTable;
