import React, {useState} from 'react'

const Badge = () : JSX.Element=> {
    const [status, setStatus] = useState("live");
  return (
    <div>
      {status}
    </div>
  )
}

export default Badge