import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./BbgChart.module.css"; 

const BbgChart = (props) => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setTitle(props.flag);
    var currFlag = "";
    if (props.flag === "Feel") {
      currFlag = "feel";
    } else if (props.flag === "Boost") {
      currFlag = "boost";
    } else {
      currFlag = "thingDuring";
    }

    var dataMap = new Map();

    for (var i = 0; i < props.data.length; i++) {
      var startTime = new Date(props.data[i]["startTime"]).getTime();
      var endTime = new Date(props.data[i]["endTime"]).getTime();
      var emotion = props.data[i][currFlag];
      var difference = Math.floor((endTime - startTime) / 1000); // its in ms, we want seconds
      if (dataMap.has(emotion)) {
        var currVal = dataMap.get(emotion);
        var updatedTime = difference + currVal;
        dataMap.set(emotion, updatedTime);
      } else {
        dataMap.set(emotion, difference);
      }
    }

    const dataForChart = Array.from(dataMap.entries()).map(([name, value]) => ({
      name,
      value,
    }));

    setData(dataForChart);
  }, []);

  useEffect(() => {
    setTitle(props.flag);
    var currFlag = "";
    if (props.flag === "Feel") {
      currFlag = "feel";
    } else if (props.flag === "Boost") {
      currFlag = "boost";
    } else {
      currFlag = "thingDuring";
    }

    var dataMap = new Map();

    for (var i = 0; i < props.data.length; i++) {
      var startTime = new Date(props.data[i]["startTime"]).getTime();
      var endTime = new Date(props.data[i]["endTime"]).getTime();
      var emotion = props.data[i][currFlag];
      var difference = Math.floor((endTime - startTime) / 1000); // its in ms, we want seconds
      if (dataMap.has(emotion)) {
        var currVal = dataMap.get(emotion);
        var updatedTime = difference + currVal;
        dataMap.set(emotion, updatedTime);
      } else {
        dataMap.set(emotion, difference);
      }
    }

    const dataForChart = Array.from(dataMap.entries()).map(([name, value]) => ({
      name,
      value,
    }));

    setData(dataForChart);
  }, [props.flag]);

  const COLORS = ["#0088FE", "#00C49F", "#FFAA00", "#FF8042", "#AF19FF", "#FFC0CB", "#8884D8"];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ textAlign: "center", background: "white", padding: "5px"}}>
          <div className="tooltip-label">{payload[0].name}</div>
        </div>
      );
    }
    return null;
  };

  const formatTime = (value) => {
    if (value < 60) {
      return `${value} s`;
    } else if (value < 3600) {
      return `${Math.floor(value / 60)} m`;
    } else if (value < 86400) {
      return `${Math.floor(value / 3600)} hr`;
    } else if (value < 604800) {
      return `${Math.floor(value / 86400)} d`;
    } else {
      return `${Math.floor(value / 604800)} w`;
    }
  };

  return (
    <div style={{ textAlign: "center"}}>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx={150}
          cy={150}
          outerRadius={90}
          fill="#8884d8"
          label={({ value }) => formatTime(value)}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
};

export default BbgChart;
