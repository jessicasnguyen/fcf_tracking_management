import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const DataContext = React.createContext()

export const DataProvider = (props) => {
  const [invoices, setInvoices] = useState([])
  const [items, setItems] = useState([])
  const [payments, setPayments] = useState([])
  const [customers, setCustomers] = useState([])

  //// INVOICES ////

  useEffect(() => {
    getInvoices()
    getCustomers()
  }, [])

  const getInvoices = async () => {
    try {
      let res = await axios.get('/api/invoices')
      setInvoices(res.data)
    } catch (err) {
      alert('Error in getInvoices in Data Provider')
    }
  }

  const addInvoice = async (customerId, invoice) => {
    try {
      let res = await axios.post(
        `/api/customers/${customerId}/invoices`,
        invoice
      )
      setInvoices([res.data, ...invoices])
    } catch (err) {
      alert('Error in addInvoice in Data Provider')
    }
  }

  const updateInvoice = async (customerId, invoice) => {
    try {
      let res = await axios.put(
        `/api/customers/${customerId}/invoices/${invoice.id}`,
        invoice
      )
      let updateInvoices = invoices.map((inv) =>
        inv.id === res.data.id ? res.data : inv
      )
      setInvoices(updateInvoices)
    } catch (err) {
      alert('Error in updateInvoice in Data Provider')
    }
  }

  const deleteInvoice = async (customerId, invoiceId) => {
    try {
      await axios.delete(`/api/customers/${customerId}/invoices/${invoiceId}`)
      setInvoices(invoices.filter((inv) => inv.id !== invoiceId))
    } catch (err) {
      alert('Error in deleteInvoice in Data Provider')
    }
  }

  //// ITEMS ////

  const addItem = async (invoiceId, item) => {
    try {
      let res = await axios.post(`/api/invoices/${invoiceId}/items`, item)
      setItems([res.data, ...items])
    } catch (err) {
      alert('Error in addItem in Data Provider')
    }
  }

  const updateItem = async (invoiceId, item) => {
    try {
      let res = await axios.put(
        `/api/invoices/${invoiceId}/items/${item.id}`,
        item
      )
      let updateItems = items.map((itm) =>
        itm.id === res.data.id ? res.data : itm
      )
      setItems(updateItems)
    } catch (err) {
      alert('Error in updateItem in Data Provider')
    }
  }

  const deleteItem = async (invoiceId, itemId) => {
    try {
      let res = await axios.delete(`/api/invoices/${invoiceId}/items/${itemId}`)
      let updateItems = items.filter((itm) => itm.id !== res.data.id)
      setItems(updateItems)
    } catch (err) {
      alert('Error in deleteItem in Data Provider')
    }
  }

  //// PAYMENTS ////

  const addPayment = async (invoiceId, payment) => {
    try {
      let res = await axios.post(`/api/invoices/${invoiceId}/payments`, payment)
      setPayments([res.data, ...payments])
    } catch (err) {
      alert('Error in addPayment in Data Provider')
    }
  }

  const updatePayment = async (invoiceId, payment) => {
    try {
      let res = await axios.put(
        `/api/invoices/${invoiceId}/payments/${payment.id}`,
        payment
      )
      let updatePayments = items.map((pmt) =>
        pmt.id === res.data.id ? res.data : pmt
      )
      setPayments(updatePayments)
    } catch (err) {
      alert('Error in updatePayment in Data Provider')
    }
  }

  const deletePayment = async (invoiceId, paymentId) => {
    try {
      let res = await axios.delete(
        `/api/invoices/${invoiceId}/payments/${paymentId}`
      )
      let updatePayments = items.filter((pmt) => pmt.id !== res.data.id)
      setPayments(updatePayments)
    } catch (err) {
      alert('Error in deletePayment in Data Provider')
    }
  }

  //// CUSTOMERS ////

  const getCustomers = async () => {
    try {
      let res = await axios.get('/api/customers')
      setCustomers(res.data)
    } catch (err) {
      alert('Error in getCustomers in Data Provider')
    }
  }

  const addCustomer = async (customer) => {
    try {
      let res = await axios.post('/api/customers', customer)
      setCustomers([res.data, ...customers])
    } catch (err) {
      alert('Error in addCustomer in Data Provider')
    }
  }

  const updateCustomer = async (customer) => {
    try {
      let res = await axios.put(`/api/customers/${customer.id}`, customer)
      let updateCustomers = customers.map((cus) =>
        cus.id === res.data.id ? res.data : cus
      )
      setCustomers(updateCustomers)
    } catch (err) {
      alert('Error in updateCustomer in Data Provider')
    }
  }

  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`/api/customers/${id}`)
      setCustomers(customers.filter((cus) => cus.id !== id))
    } catch (err) {
      alert('Error in deleteCustomer in Data Provider')
    }
  }

  return (
    <DataContext.Provider
      value={{
        getInvoices,
        getCustomers,
        addInvoice,
        updateInvoice,
        deleteInvoice,
        addItem,
        updateItem,
        deleteItem,
        addPayment,
        updatePayment,
        deletePayment,
        addCustomer,
        updateCustomer,
        deleteCustomer,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
