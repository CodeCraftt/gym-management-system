// src/pages/AdminBillReceipts.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button, TextField, Typography, Paper, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import Layout from '../components/Layout';

export default function AdminBillReceipts() {
  const [members, setMembers] = useState([]);
  const [packages, setPackages] = useState([]);
  const [form, setForm] = useState({ memberId: '', packageId: '', amountPaid: '' });
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      const [res1, res2] = await Promise.all([
        axios.get('http://localhost:5000/api/members', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('http://localhost:5000/api/fees', {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);
      setMembers(res1.data);
      setPackages(res2.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/bills', form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setForm({ memberId: '', packageId: '', amountPaid: '' });
    alert('Bill Created');
  };

  return (
    <Layout>
    <div className="p-10">
      <Typography variant="h5" className="mb-4">Create Bill Receipt</Typography>
      <Paper className="p-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <FormControl fullWidth>
            <InputLabel>Member</InputLabel>
            <Select value={form.memberId} label="Member"
              onChange={(e) => setForm({ ...form, memberId: e.target.value })}>
              {members.map(m => (
                <MenuItem key={m._id} value={m._id}>{m.name} ({m.email})</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Package</InputLabel>
            <Select value={form.packageId} label="Package"
              onChange={(e) => {
                const selected = packages.find(p => p._id === e.target.value);
                setForm({ ...form, packageId: e.target.value, amountPaid: selected.amount });
              }}>
              {packages.map(p => (
                <MenuItem key={p._id} value={p._id}>{p.name} - ₹{p.amount}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Amount Paid"
            type="number"
            fullWidth
            value={form.amountPaid}
            onChange={(e) => setForm({ ...form, amountPaid: e.target.value })}
          />

          <Button type="submit" variant="contained" className="col-span-2">Create Receipt</Button>
        </form>
      </Paper>
    </div>
    </Layout>
  );
}
