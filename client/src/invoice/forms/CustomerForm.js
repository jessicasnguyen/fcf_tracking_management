import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../providers/DataProvider'

const CustomerForm = (props) => {
  const { addCustomer, updateCustomer, customer, setCustomer } =
    useContext(DataContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [first_name, setFirstName] = useState(
    props.first_name ? props.first_name : ''
  )
  const [last_name, setLastName] = useState(
    props.last_name ? props.last_name : ''
  )
  const [email, setEmail] = useState(props.email ? props.email : '')
  const [company, setCompany] = useState(props.company ? props.company : '')
  const [customer_cat, setCustomerCat] = useState(
    props.customer_cat ? props.customer_cat : ''
  )
  const [phone, setPhone] = useState(props.phone ? props.phone : '')
  const [mobile, setMobile] = useState(props.mobile ? props.mobile : '')
  const [fax, setFax] = useState(props.fax ? props.fax : '')
  const [website, setWebsite] = useState(props.website ? props.website : '')
  const [street, setStreet] = useState(props.street ? props.street : '')
  const [city, setCity] = useState(props.city ? props.city : '')
  const [state, setState] = useState(props.state ? props.state : '')
  const [zip, setZip] = useState(props.zip ? props.zip : '')
  const [country, setCountry] = useState(props.country ? props.country : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({
      first_name,
      last_name,
      email,
      company,
      customer_cat,
      phone,
      mobile,
      fax,
      website,
      street,
      city,
      state,
      zip,
      country,
    })

    if (props.id) {
      props.updateCustomer({
        id: props.id,
        first_name,
        last_name,
        email,
        company,
        customer_cat,
        phone,
        mobile,
        fax,
        website,
        street,
        city,
        state,
        zip,
        country,
      })
      console.log('update here:')
      if (props.setShowEditForm) {
        props.setShowEditForm(false)
      }
    } else {
      addCustomer({
        first_name,
        last_name,
        email,
        company,
        customer_cat,
        phone,
        mobile,
        fax,
        website,
        street,
        city,
        state,
        zip,
        country,
      })
      console.log('create here:', { first_name, last_name })
    }
    setFirstName('')
    setLastName('')
    setEmail('')
    setCompany('')
    setCustomerCat('')
    setPhone('')
    setMobile('')
    setFax('')
    setWebsite('')
    setStreet('')
    setCity('')
    setState('')
    setZip('')
    setCountry('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{props.id ? 'Edit' : 'New'} Customer</h1>

        <label>
          First Name:
          <input
            value={first_name}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
        </label>

        <label>
          Last Name:
          <input
            value={last_name}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        </label>

        <label>
          Email:
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </label>

        <label>
          Company:
          <input
            value={company}
            onChange={(e) => {
              setCompany(e.target.value)
            }}
          />
        </label>

        <label>
          Category:
          <select
            value={customer_cat}
            onChange={(e) => {
              setCustomerCat(e.target.value)
            }}
          >
            <option>Test</option>
            <option>Test 2</option>
            <option>Test 3</option>
          </select>
        </label>

        <label>
          Phone:
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </label>

        <label>
          Mobile:
          <input
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value)
            }}
          />
        </label>

        <label>
          Fax:
          <input
            value={fax}
            onChange={(e) => {
              setFax(e.target.value)
            }}
          />
        </label>

        <label>
          Website:
          <input
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value)
            }}
          />
        </label>

        <label>
          Street:
          <input
            value={street}
            onChange={(e) => {
              setStreet(e.target.value)
            }}
          />
        </label>

        <label>
          City:
          <input
            value={city}
            onChange={(e) => {
              setCity(e.target.value)
            }}
          />
        </label>

        <label>
          State:
          <input
            value={state}
            onChange={(e) => {
              setState(e.target.value)
            }}
          />
        </label>

        <label>
          Zip:
          <input
            value={zip}
            onChange={(e) => {
              setZip(e.target.value)
            }}
          />
        </label>

        <label>
          Country:
          <input
            value={country}
            onChange={(e) => {
              setCountry(e.target.value)
            }}
          />
        </label>

        <br />
        <button>{props.id ? 'update' : 'save'}</button>
      </form>
      <p>id: {props.id ? props.id : 'no id'}</p>
      <p>{JSON.stringify(location.state)}</p>
    </div>
  )
}

export default CustomerForm
