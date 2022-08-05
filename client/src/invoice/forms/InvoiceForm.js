import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../providers/DataProvider'

const InvoiceForm = (props) => {
  const { addInvoice } = useContext(DataContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [terms, setTerms] = useState(props.terms || '')
  const [summary, setSummary] = useState(props.summary || '')
  const [invoice_date, setInvoiceDate] = useState(props.invoice_date || '')
  const [paid, setPaid] = useState(props.paid || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.id) {
      props.updateInvoice(props.customerId, {
        id: props.id,
        terms,
        summary,
        invoice_date,
        paid,
      })
      console.log('update here:')
    } else {
      props.addInvoice(props.customerId, { terms, summary, invoice_date, paid })
    }
    setTerms('')
    setSummary('')
    setInvoiceDate('')
    setPaid('')
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>{props.id ? 'Edit' : 'New'} Invoice</h1>

        <label>
          Summary:
          <input
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value)
            }}
          />
        </label>

        <label>
          Terms:
          <select
            value={terms}
            onChange={(e) => {
              setTerms(e.target.value)
            }}
          >
            <option>30</option>
            <option>60</option>
          </select>
        </label>

        <label>
          Invoice Date:
          <input
            value={invoice_date}
            onChange={(e) => {
              setInvoiceDate(e.target.value)
            }}
          />
        </label>

        <label>
          Paid:
          <select
            value={paid}
            onChange={(e) => {
              setPaid(e.target.value)
            }}
          >
            <option>True</option>
            <option>False</option>
          </select>
        </label>

        <br />

        <button>{props.id ? 'update' : 'save'}</button>
      </form>
    </div>
  )
}

export default InvoiceForm
