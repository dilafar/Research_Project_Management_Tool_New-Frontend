import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import {Chart} from 'react-chartjs-2';


const LineChart = () => {
  return (
    <div>
<Chart 
         type='line'
        data={{
            labels: ['staff' , 'students','submissions'],
            datasets: [
                {
                    label: 'Number of Registrations',
                    data:[100 , 120 , 130],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                       
                    ],
                    borderWidth: 1,
                }
            ]
        }}
        height={300}
        width={300}
        options={{
            maintainAspectRatio: false,
        }}
    />


    </div>
  )
}

export default LineChart