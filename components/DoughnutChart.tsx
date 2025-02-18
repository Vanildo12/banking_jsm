"use client"
import {Chart as ChartJs, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

  ChartJs.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  accounts: any[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {

  const data = {
    datasets: [{
      label: 'My First Dataset',
      data: [12500, 250500, 754000],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    }],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }

  return <Doughnut 
          data={data}
          options= {{
            cutout: '60%',
            plugins: {
              legend: {
                display: false
              }
            }
          }} 
         />

};

export default DoughnutChart;
