import React from 'react';
import TableauResponse from './TableauResponse';
import BarHistogram from './commons/BarHistogram';
import Button from './commons/Button';
import Select from './commons/Select';


const questions = [
    { text: 'Question 1', answer: 'oui' },
    { text: 'Question 2', answer: 'non' },
    { text: 'Question 3', answer: 'oui' },
    { text: 'Question 4', answer: 'non' },
    { text: 'Question 5', answer: 'oui' },
    { text: 'Question 6', answer: 'non' },
    { text: 'Question 7', answer: 'oui' },
];

const childs = [
    '1 2 3',
    '1 2 4',
    '1 2 5',
    '1 2 6',
    '1 2 7',
    '1 2 8',
    '1 2 9',
    '1 3 1',
    '1 3 2',
    '1 3 3',
    '1 3 4',
    '1 3 5',
];

const data = [30, 40, 90, 60, 80, 70, 20, 70, 40];

const DetailTable = React.forwardRef((props, ref) => {
    return (
    <div ref={ref} className='pt-3'>
        <div className="bg-gray-100 min-h-screen flex justify-center items-center mb-5">
            <BarHistogram data={data} />
        </div>
        <div className="pt-5">
        <form onSubmit={(e) => { e.preventDefault(); }}>
            <Select label="" className="text-black-2" name="create-response" onChange={null} error="">
            {childs.map((child, index) => (
                <option key={index} value={child}>{child}</option>
            ))}
            </Select>
            <div className="flex flex-row justify-evenly mt-5 pt-5">
                <Button type="submit" isLoading={false} className="w-full">Valider la Personalité</Button>
            </div>
        </form>
        </div>
        <div className="p-2">
            <h1 className="text-2xl font-bold text-center mt-24 mb-20">Tableau de Réponse aux Questions</h1>
            <TableauResponse questions={questions} />
        </div>
    </div>
    );
});

DetailTable.displayName = 'DetailTable';

export default DetailTable;
