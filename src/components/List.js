const ListItem = ({ data }) => {
  return (
    <li>
      <span className="label">{data.name}</span>

      <span className="value">: {data.value}</span>
    </li>
  );
};

export const genList = (compData) => {
  return (
    <div key={Math.round(Math.random() * 10000)}>
      <h1>{compData.listHeader}</h1>
      <ul>
        {compData.child?.map((li) => (
          <ListItem key={Math.round(Math.random() * 10000)} data={li} />
        ))}
      </ul>
    </div>
  );
};
