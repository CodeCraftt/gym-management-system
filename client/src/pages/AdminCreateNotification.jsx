// src/pages/AdminCreateNotification.jsx
import React, { useState } from 'react';
import axios from 'axios';
import {
  Typography, TextField, Button, Paper
} from '@mui/material';
import Layout from '../components/Layout';

export default function AdminCreateNotification() {
  const [form, setForm] = useState({ title: '', message: '' });
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/notifications', form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setForm({ title: '', message: '' });
    alert('Notification sent!');
  };

  return (
    <Layout>
    <div className="p-10">
      <Typography variant="h5" className="mb-4">Create Notification</Typography>
      <Paper className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth label="Title" value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <TextField
            fullWidth label="Message" multiline rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <Button type="submit" variant="contained">Send Notification</Button>
        </form>
      </Paper>
    </div>
    </Layout>
  );
}
