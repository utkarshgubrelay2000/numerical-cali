import React from "react";
import { Line } from "react-chartjs-2";
export default function Dough(props) {
  console.log(props);
  let arrayIndex = [];
  let indexA = [];
  let arrayFData = [];
  let arrayColor = [];
  props.graphData.map((item, index) => {
    arrayIndex.push(item.m);
    indexA.push(index+1);
    arrayFData.push(item.fm);
    //console.log(index/2)
    if (index % 2 === 0) {
      arrayColor.push(" rgba(255, 99, 132, 0.9)");
    } else if (index % 3 === 0) {
      arrayColor.push("rgba(54, 162, 235, 0.9)");
    } else {
      arrayColor.push("rgba(255, 206, 86, 0.9)");
    }
  });
  return (
    <>
      <Line
       options={{
        responsive: true,
      }}
        data={{
          labels: indexA,
          datasets: [
            {
              label: "F(M)",
              data: arrayFData,
              fill: false,
              borderColor: "green",
            },
            {
              label: "M",
              data: arrayIndex,
              fill: false,
              borderColor: "red",
            },
          
          ],
        }}
        
        height={200}
        width={200}
      />
    </>
  );
}
