import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import logo from '../../assets/logo.png';
// import Button from "../../components/commons/Button";

/* eslint-disable react/prop-types */

const BarHistogram = ({ data }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        datasets: [{
            label: 'Pourcentage',
            data: data,
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            "rgb(0, 128, 128, 0.5)",
            "rgb(0, 0, 128, 0.5)",
            "rgb(128, 0, 128, 0.5)",
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            "rgb(0, 128, 128, 1)",
            "rgb(0, 0, 128, 1)",
            "rgb(128, 0, 128, 1)",
            ],
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
        <div className='w-full'>
            <div className='flex justify-evenly mb-9 flex-wrap'>
                <img src={logo} alt="logo" className='w-32 h-12' />
                <h3 className="text-2xl font-bold text-center mb-9">Histogramme du resultat de son Evaluation</h3>
            </div>
            <div className='ml-3 w-full'>
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    );
};

export default BarHistogram;