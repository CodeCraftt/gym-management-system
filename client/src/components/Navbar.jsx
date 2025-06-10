// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const renderLinks = () => {
    if (!user) return null;

    if (user.role === 'admin') {
      return (
        <>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/admin/members">Members</Button>
          <Button color="inherit" component={Link} to="/admin/fees">Fee Packages</Button>
          <Button color="inherit" component={Link} to="/admin/bills">Bills</Button>
          <Button color="inherit" component={Link} to="/admin/notifications">Notifications</Button>
        </>
      );
    }

    if (user.role === 'member') {
      return (
        <>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/member/bills">My Bills</Button>
          <Button color="inherit" component={Link} to="/member/notifications">Notifications</Button>
        </>
      );
    }

    return null;
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar className="flex justify-between">
        <Typography variant="h6">GYM Management</Typography>
        <Box className="flex gap-4 items-center">
          {renderLinks()}
          {user && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
