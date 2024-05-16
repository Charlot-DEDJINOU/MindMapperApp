import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Responses from "./Dashboard/Responses";
import Users from "./Dashboard/Users";
import DetailResponse from "./Dashboard/DetailResponse";

export default function Dashboard(){
    return (
      <DashboardLayout>
        <Routes>
          <Route path="/responses" element={<Responses />} />
          <Route path="/users" element={<Users />} />
          <Route path="/detail" element={ <DetailResponse />} />
          <Route path="*" element={<p>Momo</p>} />
        </Routes>
      </DashboardLayout>
    );
  };