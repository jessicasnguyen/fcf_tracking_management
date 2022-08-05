import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

const OpenInvoices = () => {
  const [open, setOpen] = useState([])

  const navigate = useNavigate()
  let nav = useNavigate()

  useEffect(() => {
    getOpen()
  }, [])

  const getOpen = async () => {
    try {
      let res = await axios.get('/api/open')
      setOpen(res.data)
      // console.log('OPEN INVOICES:', res.data)
    } catch (err) {
      alert('Error in getting open invoices')
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="header-row">
            <TableCell>
              <h4>ID</h4>
            </TableCell>
            <TableCell>
              <h4>Name</h4>
            </TableCell>
            <TableCell>
              <h4>Company</h4>
            </TableCell>
            <TableCell>
              <h4>Service Date</h4>
            </TableCell>
            <TableCell>
              <h4>Invoice Date</h4>
            </TableCell>
            <TableCell>
              <h4>Due Date</h4>
            </TableCell>
            <TableCell>
              <h4>Total</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {open.map((open) => (
            <TableRow key={open.id}>
              <TableCell>{open.id}</TableCell>
              <TableCell>
                {open.first_name} {open.last_name}
              </TableCell>
              <TableCell>{open.company}</TableCell>
              <TableCell>Service Date</TableCell>
              <TableCell>{open.invoice_date}</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>{open.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OpenInvoices
