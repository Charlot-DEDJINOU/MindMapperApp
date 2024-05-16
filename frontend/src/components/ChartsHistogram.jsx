import BarHistogram from "./commons/BarHistogram";

function ChartsHistogram(){
    const data = [30, 40, 90, 60, 80, 70, 20, 70, 40];

    return (
        <div>
            <div className="bg-gray-100 min-h-screen flex justify-center items-center">
                <BarHistogram data={data} />
            </div>
        </div>
    );
}

export default ChartsHistogram;