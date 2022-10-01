
import './App.css';
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Quality from './components/data_quality/quality_dash'
import Report from './components/data_quality/report'
import History from './components/data_quality/history'
import ModelBuilder from './components/model_builder/model_dash'
import UserInput from './components/model_builder/userinput'
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {AuthProvider} from './components/auth.js';
import {RequireAuth} from './components/RequireAuth.js';
import Output from './components/model_builder/output'

function App() {
  return (
  <AuthProvider>
   <BrowserRouter>
    <AnimatePresence exitBeforeEnter >
      <Routes key={window.location.pathname}>
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
         <Route path="/quality" element={<RequireAuth><Quality /></RequireAuth>} />
         <Route path="/report_quality" element={<RequireAuth><Report /></RequireAuth>} />
         <Route path="/history_quality" element={<RequireAuth><History /></RequireAuth>} />
          <Route path="/modelbuilder" element={<RequireAuth><ModelBuilder /></RequireAuth>} />
          <Route path="/userinput" element={<UserInput />} />
          <Route path="/output" element={<Output />} />
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
