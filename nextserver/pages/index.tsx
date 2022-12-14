import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import moment from 'moment';

export default function Home() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [startDate , setStartDate] = useState('')

  const [endDate , setEndDate] = useState('')
  const [date , setDate] = useState('')
  return (
    <div className={styles.container}>
     <form action="/action_page.php">
  <label >Email</label> <br />
  <input type="email" id="fname" name="fname" onChange={(e) => setEmail(e.target.value)} required/><br/><br/>
  {/* datetime picker */}
  <label >Pick a  Date</label> <br />
  {/* <input type="datetime-local"
       onChange={(e) => setStartDate(e.target.value)}
      /> <br /><br />
  <label >End Date</label> <br />
  <input type="datetime-local" 
        onChange={(e) => setEndDate(e.target.value)}
      /> <br /><br /> */}
      <input 
       type="date" 
       onChange={(e) => setDate(moment(e.target.value,"YYYY-MM-DD").format(' "YYYY-MM-DDTHH:mm"'))}
      ></input> <br /><br />
</form>
<Link className='fcc-btn' href={`/booking?startDate=${(date.replace(/['"]+/g, '')).replace(/\s/g, '')}&endDate=${((moment(date,"YYYY-MM-DD").add(18, "hours").format(' "YYYY-MM-DDTHH:mm"').replace(/['"]+/g, '')).replace(/\s/g, ''))}&email=${email}`}>Send Invitation</Link>
{/* <Link className='fcc-btn' href={`/booking?startDate=${startDate}&endDate=${endDate}`}>Send Invitation</Link> */}
<div className='toDelete'>

</div>
    </div>
  )
}
