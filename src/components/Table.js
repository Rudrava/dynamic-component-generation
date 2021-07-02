export const genTable = (compData) => {
  return (
    <div key={Math.round(Math.random() * 10000)}>
      <h1>{compData.tableHeader}</h1>
      <table>
        <thead>
          <tr>
            {compData.headers.map((header) => (
              <td key={Math.round(Math.random() * 10000)}>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {compData.records.map((record) => (
            <tr key={Math.round(Math.random() * 10000)}>
              {record.map((data) => (
                <td key={Math.round(Math.random() * 10000)}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
