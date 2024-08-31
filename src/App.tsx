import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./health_Station/login/page";
import Health_Station from "./health_Station/healthStationMain/page";
import PersonalRecordData from "./health_Station/personalRecordData/page";
import HealthRecordFrom from "./health_Station/healthRecordFrom/page";
import Test from "./health_Station/Test";
import HealthCheckInformation from "./health_Station/healthStationPageData/page";
import DailyRoutineAssessmentFormADL from "./health_Station/dailyRoutineAssessmentFormADL/page";
import Admin from "./health_Station/admin/page";
import FormAdmin from "./health_Station/fromAdmin/page";
import HealthHistoryTable from "./health_Station/admin/userfrom/healthHistoryTable";
import CaregiverInformation from "./health_Station/admin/userfrom/caregiverInformation";
import CitizenInformation from "./health_Station/admin/userfrom/citizenInformation";
import AdminProflile from "../src/health_Station/admin/adminProfile/page";
import Proflile from "./health_Station/admin/profile/profile";
import AddUser from "./health_Station/admin/profile/addUser";
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/health_Station" element={<Health_Station />} />
          <Route path="/health_Station/personalRecordData" element={<PersonalRecordData />} />
          <Route path="/health_Station/healthRecordForm" element={<HealthRecordFrom />} />
          <Route path="/health_Station/healthCheckInformation" element={<HealthCheckInformation />} />
          <Route path="/health_Station/dailyRoutineAssessmentFormADL" element={<DailyRoutineAssessmentFormADL />} />
          <Route path="/test" element={<Test />} />
          
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/formAdmin" element={<FormAdmin />} />
          <Route path="/admin/userfrom/healthHistoryTable" element={<HealthHistoryTable />} />
          <Route path="/admin/userfrom/caregiverInformation" element={<CaregiverInformation />} />
          <Route path="/admin/userfrom/citizenInformation" element={<CitizenInformation />} />
          <Route path="/admin/adminProflile" element={<AdminProflile />} />
          <Route path="/admin/Proflile" element={<Proflile />} />
          <Route path="/admin/Proflile/addUser" element={<AddUser />} />
          
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
