import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Oops something went wrong..</h1>
        <h2>{err.statusText}</h2>
        <h3>{err.status}</h3>
    </div>
  )
}

export default Error