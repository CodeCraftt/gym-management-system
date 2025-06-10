// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <Paper elevation={3} className="p-6 w-96 flex flex-col justify-center gap-5">
        <Typography variant="h5" className="mb-5">Login</Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <Button type="submit" variant="contained" fullWidth>Login</Button>
        </form>
        <Button onClick={() => navigate('/signup')} fullWidth className="mt-2">
          Don't have an account? Signup
        </Button>
      </Paper>
    </div>
  );
}
