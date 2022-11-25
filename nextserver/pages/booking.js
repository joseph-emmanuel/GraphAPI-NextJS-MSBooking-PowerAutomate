import Head from "next/head";
import Image from "next/image";
import moment from "moment";
import axios from "axios";
import getData from "../public/testFile";
import Script from "next/script";
import { use, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
// import getBookedSlots from "../public/getSlots";

function Booking({ slots, email, startDate, endDate }) {
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  //   console.log("slots", slots);
  const bookedSlots = slots.value.map((item) =>
    moment(item.start.dateTime, "YYYY-MM-DDTHH:mm").format("hh:mmA")
  );
  const totalSlots = arrayCreator(bookedSlots);
  //   console.log("totalSlots", totalSlots);

  return (
    <div>
      <h1 className="text-center mt-24"> Form </h1>
      {/* <button onClick={submitContact}>Click for Data</button> */}
      <div className="m-auto">
        <form action="" onSubmit={submitContact} className="m-auto">
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="!w-[200px]"
            type="email"
            value={email}
            id="email"
            disabled
          />{" "}
          <br /> <br />
          <label htmlFor="text">Name</label>
          <br />
          <input
            className="!w-[200px]"
            type="text"
            onChange={({ target }) => setName(target?.value)}
          />
          <br />
          <select
            name=""
            id=""
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {totalSlots.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </form>{" "}
        <br /> <br />
        <button
          onClick={() =>
            submitContact(startDate, endDate, email, name, selectedOption)
          }
        >
          Submit data
        </button>
      </div>
    </div>
  );
}
export default Booking;
function arrayCreator(slots) {
  //   slots = moment(slots).add(6, "hours").format("hh:mmA");
  slots = slots.map((item) =>
    moment(item, "hh:mmA").add(6, "hours").format("hh:mmA")
  );
  //   console.log("slots", slots);

  console.log("slots", slots);
  const locale = "en";
  const hours = [];
  moment.locale(locale);
  for (let hour = 9; hour < 18; hour++) {
    hours.push(moment({ hour }).format("hh:mmA"));
    hours.push(
      moment({
        hour,
        minute: 30,
      }).format("hh:mmA")
    );
  }
  return hours.filter((item) => !slots.includes(item));
}
Booking.getInitialProps = async (ctx) => {
  const startDate = ctx.query.startDate + ":00Z";
  const endDate = ctx.query.endDate + ":00Z";
  const email = ctx.query.email;
  //   console.log("startDate", startDate);
  //   console.log("endDate", endDate);
  //   console.log("email", email);
  //   console.log(
  //     `Query string: https://graph.microsoft.com/beta/bookingBusinesses/bookingBusiness@sashat.onmicrosoft.com/calendarView?start=${startDate}&end=${endDate}`
  //   );

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCES_TOKEN}`,
      "Content-Type": "application/json",
    },
  };
  const org = `https://graph.microsoft.com/beta/bookingBusinesses/bookingBusiness@sashat.onmicrosoft.com/calendarView?start=${startDate}&end=${endDate}`;
  const dmy = `https://catfact.ninja/fact`;
  const res = await fetch(org, config);
  const json = await res.json();
  //   console.log("json", json);
  return { slots: json, email: email, startDate: startDate, endDate: endDate };
};
function submitContact(startDate, endDate, email, name, selectedOption) {
  startDate = moment(
    moment(startDate, "YYYY-MM-DDTHH:mm:ss:00.0000000+00:00").format(
      "YYYY-MM-DDT"
    ) + selectedOption,
    "YYYY-MM-DDThh:mmA"
  ).format("YYYY-MM-DDTHH:mm");
  endDate = moment(startDate).add(30, "minutes").format("YYYY-MM-DDTHH:mm");

  getData(moment(startDate).format("YYYY-MM-DDTHH:mm"), endDate, email, name);
}
