import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom'
import { DataContext } from '../../providers/DataProvider'
import CustomerForm from '../forms/CustomerForm'

const CustomerShow = () => {
  const { updateCustomer, deleteCustomer } = useContext(DataContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [customer, setCustomer] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const params = useParams()

  useEffect(() => {
    getCustomer()
  }, [])

  const addCusForm = () => {
    let path = `/customers/new`
    navigate(path)
  }

  const editCusForm = () => {
    let path = `/customers/${customer.id}/edit`
    navigate(path)
  }

  const getCustomer = async () => {
    try {
      let res = await axios.get(`/api/customers/${params.id}`)
      setCustomer(res.data)
    } catch (err) {
      alert('Error in getting customer')
    }
  }

  return (
    <div>
      <h1>
        {customer.first_name} {customer.last_name}
      </h1>
    </div>
  )
}

export default CustomerShow
