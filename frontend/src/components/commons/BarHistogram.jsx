import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import logo from '../../assets/logo.png';

/* eslint-disable react/prop-types */

const BarHistogram = ({ data }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
        className: '',
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
        }]
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
                    // beginAtZero: true,
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
        <div className="container mx-auto">
            <div className="flex justify-end space-x-4 mb-16">
                <button className="rounded-full bg-slate-900 p-2 pr-4 pl-2 flex items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer mr-2" viewBox="0 0 16 16">
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                    </svg> Imprimer

                </button>
                <button className="rounded-full bg-slate-900 p-2 pr-4 pl-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download mr-2" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg>Sauvegarder
                </button>
            </div>

            <div className='flex justify-evenly mb-9 flex-wrap'>
                <img src={logo} alt="logo" className='w-32 h-12' />
                <h3 className="text-2xl font-bold text-center mb-9">Histogramme du resultat de son Evaluation</h3>
            </div>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default BarHistogram;