import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router";
import OverviewPage from "./Pages/OverviewPage/OverviewPage";
import PatientsPage from "./Pages/PatientsPage/PatientsPage";
import MapPage from "./Pages/MapPage/MapPage";
import DepartmentsPage from "./Pages/DepartmentsPage/DepartmentsPage";
import DoctorsPage from "./Pages/DoctorsPage/DoctorsPage";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import { MdMenu } from "react-icons/md";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Top bar for mobile/tablet */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow flex items-center h-14 px-4">
        <button
          className="mr-3"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <MdMenu className="w-7 h-7 text-purple-500" />
        </button>
        <span className="font-bold text-xl text-gray-800">H-care</span>
      </div>
      <div className="min-h-screen bg-gray-100 flex pt-14 lg:pt-0">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-2 sm:p-4 lg:p-6 overflow-x-auto">
          <Routes>
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/" element={<OverviewPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;
