import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";

export default function Home({ access_token }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");
  const [date, setDate] = useState("");
  return (
    <div className={styles.container}>
      <form action="/action_page.php">
        <label>Email</label> <br />
        <input
          type="email"
          id="fname"
          name="fname"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        {/* datetime picker */}
        <label>Pick a Date</label> <br />
        {/* <input type="datetime-local"
       onChange={(e) => setStartDate(e.target.value)}
      /> <br /><br />
  <label >End Date</label> <br />
  <input type="datetime-local" 
        onChange={(e) => setEndDate(e.target.value)}
      /> <br /><br /> */}
        <input
          type="date"
          onChange={(e) =>
            setDate(
              moment(e.target.value, "YYYY-MM-DD").format(' "YYYY-MM-DDTHH:mm"')
            )
          }
        ></input>{" "}
        <br />
        <br />
      </form>
      <Link
        className="fcc-btn"
        href={`/booking?startDate=${date
          .replace(/['"]+/g, "")
          .replace(/\s/g, "")}&endDate=${moment(date, "YYYY-MM-DD")
          .add(18, "hours")
          .format(' "YYYY-MM-DDTHH:mm"')
          .replace(/['"]+/g, "")
          .replace(/\s/g, "")}&email=${email}&access_token=${access_token}`}
      >
        Send Invitation
      </Link>
      {/* <Link className='fcc-btn' href={`/booking?startDate=${startDate}&endDate=${endDate}`}>Send Invitation</Link> */}
      <div className="toDelete"></div>
    </div>
  );
}

// get initial properties
Home.getInitialProps = async (ctx) => {
  const code = ctx.query.code;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Cookie", `${code}`);

  var urlencoded = new URLSearchParams();
  urlencoded.append("client_id", "5d4d12cd-112d-4e5a-87e9-52c75e3219aa");
  urlencoded.append(
    "client_secret ",
    "RMP8Q~U83X-wLxQmNhdkO2dNydLWcnH1n8RJIbdA"
  );
  urlencoded.append("grant_type", "authorization_code");
  urlencoded.append("scope", "https://graph.microsoft.com/.default");
  urlencoded.append("code", `${code}`);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  //   const data = fetch(
  //     "https://login.microsoftonline.com/7bc94ed8-159e-42e6-9dc2-1c67252d2ac7/oauth2/v2.0/token",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       return { access_token: result.json() };
  //     })
  //     .catch((error) => console.log("error", error));
  const org =
    "https://login.microsoftonline.com/7bc94ed8-159e-42e6-9dc2-1c67252d2ac7/oauth2/v2.0/token";
  const res = await fetch(org, requestOptions);
  const json = await res.json();

  return { access_token: json.access_token };
};
