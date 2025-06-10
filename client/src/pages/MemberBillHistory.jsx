// src/pages/MemberBillHistory.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import Layout from '../components/Layout';

export default function MemberBillHistory() {
  const [bills, setBills] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBills = async () => {
      const res = await axios.get('http://localhost:5000/api/bills/my', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBills(res.data);
    };
    fetchBills();
  }, []);

  return (
    <Layout>
    <div className="p-10">
      <Typography variant="h5" className="mb-4">My Bill Receipts</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Package</TableCell>
              <TableCell>Amount Paid</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map(b => (
              <TableRow key={b._id}>
                <TableCell>{b.packageId?.name}</TableCell>
                <TableCell>₹{b.amountPaid}</TableCell>
                <TableCell>{new Date(b.date).toLocaleDateString()}</TableCell>
                <TableCell>{b.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </Layout>
  );
}
