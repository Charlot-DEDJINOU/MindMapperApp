import ChartsHistogram from "../../components/ChartsHistogram";
import DetailTable from "../../components/DetailTable";

function DetailResponse(){
    return(
        <div>
            <div className="p-4">
                <ChartsHistogram />
                <DetailTable />
            </div>
        </div>
    );
}

export default DetailResponse;