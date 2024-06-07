"use client"
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    const data = {
        datasets: [
            {
                data: [70, 16, 10],
                backgroundColor: [
                    '#85FF67',
                    '#676DFF',
                    '#FF7967',
                ],
                borderWidth: 0
            },
        ],
    };
    return (
        <div className="max-w-[487px] max-wh-[487px]">
            <Doughnut data={data} options={{
                responsive: true,
                maintainAspectRatio: true,
                cutout: 120
            }} />
        </div>
    )
}