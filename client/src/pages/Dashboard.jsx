// src/pages/Dashboard.jsx
import React from 'react';
import Layout from '../components/Layout.jsx';
import { Card, CardContent, Typography } from '@mui/material';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Layout>
      <Card className="max-w-xl mx-auto shadow-lg">
        <CardContent>
          <Typography variant="h4" className="mb-4">Welcome, {user?.name}</Typography>
          <Typography variant="body1" color="textSecondary">
            Role: {user?.role}
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  );
}
