export const genTable = (compData) => {
    return (
        <div key={Math.round(Math.random() * 10000)}>
            <h1>{compData.tableHeader}</h1>
            <table>
                <thead>
                    <tr>
                        {compData.headers.map((header) => (
                            <td key={Math.round(Math.random() * 10000)}>
                                {header}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {compData.records.map((record) => (
                        <tr key={Math.round(Math.random() * 10000)}>
                            {record.map((data, i, arr) => (
                                <td
                                    className={
                                        arr.length > compData.headers.length
                                            ? "err-data"
                                            : null
                                    }
                                    title={
                                        arr.length > compData.headers.length
                                            ? "There is some error in the data"
                                            : null
                                    }
                                    key={Math.round(Math.random() * 10000)}
                                >
                                    {console.log()}
                                    {data}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
