// src/pages/AdminMembers.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button, TextField, Typography, Paper, Table, TableRow, TableHead, TableCell,
  TableBody, TableContainer
} from '@mui/material';
import Layout from '../components/Layout';

export default function AdminMembers() {
  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: '' });
  const token = localStorage.getItem('token');

  const fetchMembers = async () => {
    const res = await axios.get('http://localhost:5000/api/members', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setMembers(res.data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/members', form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setForm({ name: '', email: '', phone: '', package: '' });
    fetchMembers();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/members/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchMembers();
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-4">Manage Members</h2>

    <div className="p-10">
      <Typography variant="h5" className="mb-4">Gym Members</Typography>

      <Paper className="p-4 mb-6">
        <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
          <TextField label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <TextField label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <TextField label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <TextField label="Package" value={form.package} onChange={(e) => setForm({ ...form, package: e.target.value })} />
          <Button type="submit" variant="contained" className="col-span-2">Add Member</Button>
        </form>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell><TableCell>Email</TableCell>
              <TableCell>Phone</TableCell><TableCell>Package</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map(m => (
              <TableRow key={m._id}>
                <TableCell>{m.name}</TableCell>
                <TableCell>{m.email}</TableCell>
                <TableCell>{m.phone}</TableCell>
                <TableCell>{m.package}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => handleDelete(m._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </Layout>
  );
}
