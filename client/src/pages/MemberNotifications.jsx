// src/pages/MemberNotifications.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent } from '@mui/material';
import Layout from '../components/Layout';

export default function MemberNotifications() {
  const [notifications, setNotifications] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:5000/api/notifications', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setNotifications(res.data));
  }, []);

  return (
    <Layout>
    <div className="p-10 space-y-4">
      <Typography variant="h5">Notifications</Typography>
      {notifications.map(note => (
        <Card key={note._id}>
          <CardContent>
            <Typography variant="h6">{note.title}</Typography>
            <Typography>{note.message}</Typography>
            <Typography variant="caption">
              {new Date(note.createdAt).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    </Layout>
  );
}
