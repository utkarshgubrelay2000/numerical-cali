import  React from 'react';
import { Doughnut} from 'react-chartjs-2'
export default function BarGraph(props){
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
   <Doughnut
    options={{
      responsive: true,
    }}
   data={{
    labels: arrayIndex,
    datasets: [
      {
        label: "F(M)",
        data: arrayFData,
        fill: false,
        backgroundColor: arrayColor,
      },
      {
        label: "M",
        data: arrayIndex,
        fill: false,
        backgroundColor:arrayColor,
      },
      {
        backgroundColor: arrayColor,
        borderColor: arrayColor,
        borderWidth: 1,
      },
    ],
}}
   height={400}
   width={400}
   />
    
   </>
)
}