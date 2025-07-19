import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import data from "../data/collisions.json";

function LineChartAccidents({ labels }) {
  const [visibleLines, setVisibleLines] = useState({
    fatalities: true,
    seriousInjuries: true,
    totalInjuries: true,
  });

  const toggleLine = (key) => {
    setVisibleLines((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <h2>{labels.titleLineChart}</h2>

      <div style={{ marginBottom: 10 }}>
        {["fatalities", "seriousInjuries", "totalInjuries"].map((key) => (
          <label key={key} style={{ marginRight: 12 }}>
            <input
              type="checkbox"
              checked={visibleLines[key]}
              onChange={() => toggleLine(key)}
            />
            {labels[key]}
          </label>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data.years}
          margin={{ top: 20, right: 30, left: 0, bottom: 40 }}
          >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
            dataKey="year"
            label={{ value: labels.year, position: "insideBottom", offset: -5 }}
        />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />

        {visibleLines.fatalities && (
       <Line type="monotone" dataKey="fatalities" stroke="#e74c3c" name={labels.fatalities} />
      )}
     {visibleLines.seriousInjuries && (
        <Line type="monotone" dataKey="seriousInjuries" stroke="#f39c12" name={labels.seriousInjuries} />
     )}
      {visibleLines.totalInjuries && (
       <Line type="monotone" dataKey="totalInjuries" stroke="#3498db" name={labels.totalInjuries} />
      )}
    </LineChart>
  </ResponsiveContainer>

  </div>
  );
}

export default LineChartAccidents;
