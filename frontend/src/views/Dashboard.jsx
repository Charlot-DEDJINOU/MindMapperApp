import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Responses from "./Dashboard/Responses";
import Users from "./Dashboard/Users";
import Response from "./Dashboard/Response";
import CreateResponse from "./Dashboard/CreateResponse";
import User from "./Dashboard/User";
import Questions from "./Dashboard/Questions";
import Question from "./Dashboard/Question";
import Personality from "./Dashboard/Personality";
import Personalites from "./Dashboard/Personalities";

export default function Dashboard(){
    return (
      <DashboardLayout>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/user/:type" element={<User />} />
          <Route path="/personalities" element={<Personalites />} />
          <Route path="/personality/:type" element={<Personality />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/question/:type" element={<Question />} />
          <Route path="/responses" element={<Responses />} />
          <Route path="/response" element={ <Response />} />
          <Route path="/response/create" element={ <CreateResponse />} />
          <Route path="*" element={<p>Momo</p>} />
        </Routes>
      </DashboardLayout>
    );
  };