import { useEffect, useState } from 'react'
import './assets/index.css'

export default function App() {
  const [state, setState] = useState(null)
  useEffect(() => {
    fetch('/api', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => setState(res))
      .catch(err => console.error(err))
  }, [])

  if (!state) {
    return <h1>loading...</h1>
  }

  return (
    <div>
      <h1>Skeleton for React and Express with TypeScript</h1>
      {state && <p>{state.message}</p>}
    </div>
  )
}
