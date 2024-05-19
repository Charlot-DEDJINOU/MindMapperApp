import TableauQuestions from './TableauResponse';

const questions = [
  { text: 'Question 1', answer: 'oui' },
  { text: 'Question 2', answer: 'non' },
  { text: 'Question 3', answer: 'oui' },
  { text: 'Question 4', answer: 'non' },
  { text: 'Question 5', answer: 'oui' },
  { text: 'Question 6', answer: 'non' },
  { text: 'Question 7', answer: 'oui' },
];

const DetailTable = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mt-24 mb-20">Tableau de Reponse aux Questions</h1>
      <TableauQuestions questions={questions} />
    </div>
  );
};

export default DetailTable;