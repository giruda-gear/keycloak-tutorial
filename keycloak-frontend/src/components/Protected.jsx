/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { useEffect } from 'react'

export default function Protected({ token }) {
  const isRun = useRef(false)
  useEffect(() => {
    if (isRun.current) return
    isRun.current = true

    fetch('/documents', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log('Data received:', data)
    })
  }, [])

  return <div>Protected</div>
}
