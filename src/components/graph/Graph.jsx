import React from 'react';
import { Bar } from 'react-chartjs-2';

import './Graph.css';

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  labels: ['08:00', '09:00', '10:00', '11:00', '12:00', "13:00", '14:00', '15:00', '16:00', '17:00'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: false,
      data: [2, 1, 3, 3, 7, 7.5, 6, 6.5, 3, 7, 7, 9, 6.5, 6.5, 11, 13, 11, 13, 14, 15, 16, 17, 18, 13, 12, 9, 8, 7, 6, 5, 8, 13, 14, 16, 19, 19, 21, 24, 26, 28, 29, 20, 11, 9, 10, 9, 11, 13, 8, 7, 3, 2],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [1],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [1],
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        }
      },
    ],
  },
};

const Graph = () => (
  <>
    <div className='header'>
      <h1 className='title'>Daily</h1>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default Graph;