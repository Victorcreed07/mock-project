
import './App.css';
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Quality from './components/data_quality/quality_dash'
import Report from './components/data_quality/report'
import History from './components/data_quality/history'
function App() {
  return (
   <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/quality" element={<Quality />} />
         <Route path="/report_quality" element={<Report />} />
         <Route path="/history_quality" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
