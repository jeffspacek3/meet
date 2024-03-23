import { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      ).length;
      return { name: genre, value: filteredEvents };
    });
    return data;
  };

  const COLORS = [
    "rgb(0, 139, 139,0.75)",
    "rgba(0,0,0, 0.75)",
    "rgb(255, 255, 255, 0.75)",
    "rgb(64, 224, 208, 0.75)",
    "rgb(45, 134, 85,0.75)",
  ];
  //formel from sandbox -> PieChartWithCustomizedLabel
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;

    return percent ? (
        <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
        </text>
    ) : null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius="70%"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
