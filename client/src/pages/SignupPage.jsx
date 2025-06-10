// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, MenuItem } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'member' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', form);
      navigate('/');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <Paper elevation={3} className="p-6 w-96 flex flex-col justify-center gap-5" >
        <Typography variant="h5" className="mb-4">Signup</Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            label="Name"
            fullWidth
            className="mb-4"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            className="mb-4"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            className="mb-4"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <TextField
            select
            label="Role"
            fullWidth
            className="mb-4"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <MenuItem value="member">Member</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" fullWidth>Signup</Button>
        </form>
        <Button onClick={() => navigate('/')} fullWidth className="mt-2">
                  Already have an account? Login
                </Button>
      </Paper>
    </div>
  );
}
