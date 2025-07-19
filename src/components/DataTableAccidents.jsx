import data from "../data/collisions.json";

function DataTableAccidents({ labels }) {
  return (
    <div style={{ marginTop: 30 }}>
      <h3>{labels.tableTitle}</h3>
      <div style={{ overflowX: "auto" }}>
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>{labels.year}</th>
              <th>{labels.fatalities}</th>
              <th>{labels.seriousInjuries}</th>
              <th>{labels.totalInjuries}</th>
            </tr>
          </thead>
          <tbody>
            {data.years.map((row) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{row.fatalities}</td>
                <td>{row.seriousInjuries}</td>
                <td>{row.totalInjuries}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTableAccidents;
