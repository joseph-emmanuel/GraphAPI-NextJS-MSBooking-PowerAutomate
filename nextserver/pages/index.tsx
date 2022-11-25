import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

export default function Home() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [startDate , setStartDate] = useState('')
  // console.log("startDate", startDate)
  const [endDate , setEndDate] = useState('')
  return (
    <div className={styles.container}>
     <form action="/action_page.php">
  <label >Email</label> <br />
  <input type="email" id="fname" name="fname" onChange={(e) => setEmail(e.target.value)}/><br/><br/>
  {/* datetime picker */}
  <label >Start Date</label> <br />
  <input type="datetime-local"
       onChange={(e) => setStartDate(e.target.value)}
      /> <br /><br />
  <label >End Date</label> <br />
  <input type="datetime-local" 
        onChange={(e) => setEndDate(e.target.value)}
      /> <br /><br />
</form>
<Link className='fcc-btn' href={`/booking?startDate=${startDate}&endDate=${endDate}&email=${email}`}>Send Invitation</Link>
    </div>
  )
}
