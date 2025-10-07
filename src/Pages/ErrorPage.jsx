import React from 'react'
import { useRouteError } from 'react-router'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div>
      Error Page 404 {error.message}
    </div>
  )
}

export default ErrorPage
