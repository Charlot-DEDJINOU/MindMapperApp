import ChartsHistogram from "../../components/ChartsHistogram";
import DetailTable from "../../components/DetailTable";

function Response(){
    return(
        <div>
            <div className="p-4">
                <ChartsHistogram />
                <DetailTable />
            </div>
        </div>
    );
}

export default Response;