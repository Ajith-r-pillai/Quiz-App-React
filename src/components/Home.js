import React from 'react'
import './Home.css'
import Header from './Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
 <div>
     <Header/>
     <div className='Home-main'>
      <div>
        <h1>Welcome To The Quiz</h1>
      </div>
      <div>
  <Link to='qus'> <button className='btn-start'>Start</button></Link>
      </div>

    </div>
    </div>
  )
}

export default Home