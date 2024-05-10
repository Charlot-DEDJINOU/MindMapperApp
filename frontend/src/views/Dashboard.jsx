import Dashboard from "../layouts/Dashboard";
import Responses from "./Dashboard/Responses";

export default function DashboardContent(){
    return (
      <Dashboard>
        <Routes>
          <Route path="/responses" element={<Responses />} />
          <Route path="*" element={<p>Momo</p>} />
        </Routes>
      </Dashboard>
    );
  };