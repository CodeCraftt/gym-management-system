// src/pages/AdminFeePackages.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Paper } from '@mui/material';
import Layout from '../components/Layout';

export default function AdminFeePackages() {
  const [packages, setPackages] = useState([]);
  const [form, setForm] = useState({ name: '', durationInMonths: '', amount: '' });
  const token = localStorage.getItem('token');

  const fetchPackages = async () => {
    const res = await axios.get('http://localhost:5000/api/fees', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setPackages(res.data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/fees', form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setForm({ name: '', durationInMonths: '', amount: '' });
    fetchPackages();
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <Layout>
    <div className="p-10">
      <Typography variant="h5" className="mb-4">Fee Packages</Typography>
      <Paper className="p-4 mb-6">
        <form onSubmit={handleAdd} className="grid grid-cols-3 gap-4">
          <TextField label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <TextField label="Months" type="number" value={form.durationInMonths} onChange={(e) => setForm({ ...form, durationInMonths: e.target.value })} />
          <TextField label="Amount" type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
          <Button type="submit" variant="contained" className="col-span-3">Add Package</Button>
        </form>
      </Paper>
      <ul>
        {packages.map(pkg => (
          <li key={pkg._id}>{pkg.name} - {pkg.durationInMonths} month(s) - ₹{pkg.amount}</li>
        ))}
      </ul>
    </div>
    </Layout>
  );
}
