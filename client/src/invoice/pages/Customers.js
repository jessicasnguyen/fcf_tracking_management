import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { DataContext } from '../../providers/DataProvider'
import CustomerForm from '../forms/CustomerForm'

const Customers = () => {
  const { updateCustomer, deleteCustomer } = useContext(DataContext)
  const navigate = useNavigate()
  const [customers, setCustomers] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)

  useEffect(() => {
    getCustomers()
  }, [])

  const addCusForm = () => {
    let path = `/customers/new`
    navigate(path)
  }

  const editCusForm = () => {
    let path = `/customers/${customers.id}/edit`
    navigate(path)
  }

  const getCustomers = async () => {
    try {
      let res = await axios.get('/api/customers')
      setCustomers(res.data)
    } catch (err) {
      alert('Error in getting customers')
    }
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Customers</h1>
        <button className="new-btn" onClick={addCusForm}>
          New Customer
        </button>
      </div>

      <div className="list-box">
        {/* TABLE HEADERS */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="header-row">
                <TableCell>
                  <h4>Name</h4>
                </TableCell>
                <TableCell>
                  <h4>Company</h4>
                </TableCell>
                <TableCell>
                  <h4>Email</h4>
                </TableCell>
                <TableCell>
                  <h4>Category</h4>
                </TableCell>
                <TableCell>
                  <h4>Phone</h4>
                </TableCell>
                <TableCell>
                  <h4>Address</h4>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            {/* TABLE DATA */}
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    {customer.first_name} {customer.last_name}
                  </TableCell>
                  <TableCell>{customer.company}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.customer_cat}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>
                    {customer.street}
                    <br />
                    {customer.city}, {customer.state} {customer.zip}
                  </TableCell>
                  <TableCell>
                    <div className="table-btn-container">
                      {/* Need to figure out how to pass the customer ID to this field */}
                      <button
                        className="table-btn"
                        onClick={() => {
                          setShowEditForm(!showEditForm)
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="table-btn"
                        onClick={() => {
                          deleteCustomer(customer.id)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <div>
                      {showEditForm && (
                        <CustomerForm
                          id={customer.id}
                          updateCustomer={updateCustomer}
                          setShowEditForm={setShowEditForm}
                        />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default Customers
