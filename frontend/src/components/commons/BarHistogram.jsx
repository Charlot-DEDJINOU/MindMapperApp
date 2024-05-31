import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarHistogram = ({ data }) => {
    const canvasRef = useRef(null);

    const hexColors = [
        '#FF638433', // rgba(255, 99, 132, 0.2)
        '#36A2EB33', // rgba(54, 162, 235, 0.2)
        '#FFCE5633', // rgba(255, 206, 86, 0.2)
        '#4BC0C033', // rgba(75, 192, 192, 0.2)
        '#9966FF33', // rgba(153, 102, 255, 0.2)
        '#FF9F4033', // rgba(255, 159, 64, 0.2)
        '#00808080', // rgba(0, 128, 128, 0.5)
        '#00008080', // rgba(0, 0, 128, 0.5)
        '#80008080'  // rgba(128, 0, 128, 0.5)
    ];

    const borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        "rgb(0, 128, 128, 1)",
        "rgb(0, 0, 128, 1)",
        "rgb(128, 0, 128, 1)",
    ]

    const labels = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Pourcentage',
                    data: data,
                    backgroundColor: hexColors,
                    borderColor: borderColor,
                    borderWidth: 1
                }],
            },
            options: {
                plugins: {
                    legend: {
                        position: "top",
                        labels: {
                            color: "green",
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: "green",
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "green",
                        },
                    },
                },
            }
        });

        return () => {
            myChart.destroy();
        };
    }, [data]);

    return ( 
        <div className='ml-3 w-full'>
            <canvas ref={canvasRef}></canvas>
            <div className='mt-5 flex flex-wrap justify-evenly md:justify-between'>
                {
                    labels.map((item, index) => (
                        <div className='m-3 flex items-center font-bold text-xl' key={index}>
                            <span style={{ color: borderColor[index] }}>Categorie {item} :</span>
                            <span className='ml-2'>{data[index]} %</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BarHistogram;