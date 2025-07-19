import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import data from "../data/user_types.json";

function BarChartUsers({ labels }) {
  const [year, setYear] = useState("2022");

  const chartData = data[year].map((item) => ({
    ...item,
    type: labels[item.type.toLowerCase()],
  }));

  return (
    <div style={{ marginTop: 40 }}>
      <h2>{labels.titleBarChart}</h2>

      <label>
        {labels.selectYear}:
        <select value={year} onChange={(e) => setYear(e.target.value)} style={{ marginLeft: 10 }}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </label>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#3498db" name={labels.deaths} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartUsers;
