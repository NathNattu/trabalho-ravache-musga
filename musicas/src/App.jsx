import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from '../node_modules/react-bootstrap/esm/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container className='d-flex justify-content-center align-items-center '>
        
        <DiscForm/>

        <DiscList/>
        
      </Container>
    </>
  )
}

export default App
