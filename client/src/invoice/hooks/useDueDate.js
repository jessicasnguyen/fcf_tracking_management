import React, { useState, useEffect } from 'react'

export default function useDueDate(date, terms) {
  const [dueDate, setDueDate] = useState(null)
  useEffect(() => {
    res = setDueDate(date + terms)
    return res
  }, [])
}
