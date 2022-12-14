import Head from "next/head";
import Image from "next/image";
import moment from "moment";
import axios from "axios";
import getData from "../public/testFile";
import Script from "next/script";
import { use, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

function Booking({
  slots,
  email,
  startDate,
  endDate,
  staffMembersArray,
  accessToken,
}) {
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  const router = useRouter();
  const staffArray = [];
  const multiArray = [];
  const filterdArray = [];
  const filterdArray2 = [];

  slots.value.map((item) => {
    staffArray.includes(item.staffMemberIds[0]) ||
    item.staffMemberIds[0] !== undefined
      ? staffArray.push(item.staffMemberIds[0])
      : null;
  });

  const bookedSlots = slots.value.map((item) =>
    moment(item.start.dateTime, "YYYY-MM-DDTHH:mm").format("hh:mmA")
  );
  const totalSlots = arrayCreator(bookedSlots, staffMembersArray.value, slots);
  totalSlots.map((item) => {
    multiArray.push([item.substring(0, 7), item]);
  });

  multiArray.map((item) => {
    filterdArray.includes(item[0])
      ? null
      : filterdArray.push(item[0], filterdArray2.push(item[1]));
  });

  return (
    <div>
      <h1 className="text-center mt-24"> Form </h1>
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
            id="fname"
            name="fname"
            onChange={({ target }) => setName(target?.value)}
          />
          <br />
          <br />
          <select
            name=""
            id=""
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {filterdArray2.map((item) => (
              <option value={item}>{item.slice(0, 7)}</option>
            ))}
          </select>
          <br />
        </form>{" "}
        <br /> <br />
        <button
          onClick={() =>
            submitContact(
              startDate,
              endDate,
              email,
              name,
              selectedOption,
              selectedOption.substring(7),
              accessToken
            )
          }
        >
          Submit data
        </button>
      </div>
    </div>
  );
}
export default Booking;
function arrayCreator(slots, staffNumber, slotsArray) {
  const staffArray = [];

  slotsArray.value.map((item) => {
    staffArray.push(
      moment(item.start.dateTime, "YYYY-MM-DDTHH:mm")
        .add(6, "hours")
        .format("hh:mmA") + item.staffMemberIds[0]
    );
  });

  // slotsArray.value.map((item) => {
  //   console.log(
  //     "item:",
  //     moment(item.start.dateTime, "YYYY-MM-DDTHH:mm")
  //       .add(6, "hours")
  //       .format("hh:mmA") + item.staffMemberIds[0]
  //   );
  // });

  const locale = "en";
  const hours = [];
  moment.locale(locale);
  for (let hour = 9; hour < 18; hour++) {
    for (let min = 0; min < staffNumber.length; min++) {
      hours.push(moment({ hour }).format("hh:mmA") + staffNumber[min].id);
      hours.push(
        moment({
          hour,
          minute: 30,
        }).format("hh:mmA") + staffNumber[min].id
      );
    }
  }
  return hours.filter((item) => !staffArray.includes(item));
}
Booking.getInitialProps = async (ctx) => {
  const startDate = ctx.query.startDate + ":00Z";
  const endDate = ctx.query.endDate + ":00Z";
  const email = ctx.query.email;
  const accessToken = ctx.query.access_token;

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  const org = `https://graph.microsoft.com/beta/bookingBusinesses/bookingBusiness@sashat.onmicrosoft.com/calendarView?start=${startDate}&end=${endDate}`;
  const dmy = `https://catfact.ninja/fact`;
  const res = await fetch(org, config);
  const json = await res.json();
  const staffMembers = await fetch(
    `https://graph.microsoft.com/beta/bookingBusinesses/bookingBusiness@sashat.onmicrosoft.com/staffMembers`,
    config
  );
  const staffMembersArray = await staffMembers.json();
  return {
    slots: json,
    email: email,
    startDate: startDate,
    endDate: endDate,
    staffMembersArray: staffMembersArray,
    accessToken: accessToken,
  };
};
function submitContact(
  startDate,
  endDate,
  email,
  name,
  selectedOption,
  selectedStaff,
  accessToken
) {
  startDate = moment(
    moment(startDate, "YYYY-MM-DDTHH:mm:ss:00.0000000+00:00").format(
      "YYYY-MM-DDT"
    ) + selectedOption,
    "YYYY-MM-DDThh:mmA"
  ).format("YYYY-MM-DDTHH:mm");
  endDate = moment(startDate).add(30, "minutes").format("YYYY-MM-DDTHH:mm");

  getData(
    moment(startDate).format("YYYY-MM-DDTHH:mm"),
    endDate,
    email,
    name,
    selectedStaff,
    accessToken
  );
}
