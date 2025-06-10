import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard.jsx';
import AdminMembers from './pages/AdminMembers';
import AdminFeePackages from './pages/AdminFeePackages.jsx';

import AdminBillReceipts from './pages/AdminBillReceipts';
import MemberBillHistory from './pages/MemberBillHistory.jsx';

import AdminCreateNotification from './pages/AdminCreateNotification';
import MemberNotifications from './pages/MemberNotifications';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/admin/members" element={<AdminMembers />} />
        <Route path="/admin/fees" element={<AdminFeePackages />} />
        <Route path="/admin/bills" element={<AdminBillReceipts />} />
        <Route path="/member/bills" element={<MemberBillHistory />} />
        <Route path="/admin/notifications" element={<AdminCreateNotification />} />
<Route path="/member/notifications" element={<MemberNotifications />} />
      </Routes>
    </Router>
  );
}

export default App;
