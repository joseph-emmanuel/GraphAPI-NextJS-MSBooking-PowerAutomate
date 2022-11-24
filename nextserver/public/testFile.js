// import React from "react";
import axios from "axios";
import moment from "moment";
function getData(date1, date2, email, name) {
  const stratDate = moment(date1, "YYYY-MM-DDTHH:mm").format(
    "YYYY-MM-DDTHH:mm:ss.0000000+00:00"
  );
  const endDate = moment(date2, "YYYY-MM-DDTHH:mm").format(
    "YYYY-MM-DDTHH:mm:ss.0000000+00:00"
  );

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCES_TOKEN}`,
      "Content-Type": "application/json",
    },
  };
  const bodyParameters = {
    customerEmailAddress: `${email}`,
    serviceId: "8845d8f1-7ca1-409e-a985-d143a29ffd05",
    serviceName: "Addition of tasks",
    // staffMemberIds: ["joedev@sashat.onmicrosoft.com"],
    start: {
      "@odata.type": "#microsoft.graph.dateTimeTimeZone",
      dateTime: `${date1}`,
      timeZone: "America/Chicago",
    },
    end: {
      "@odata.type": "#microsoft.graph.dateTimeTimeZone",
      dateTime: `${date2}`,
      timeZone: "America/Chicago",
    },
    customers: [
      {
        "@odata.type": "#microsoft.graph.bookingCustomerInformation",

        customerId: "",
        name: `${name}`,
        emailAddress: `${email}`,
        phone: "213-555-0199",
        notes: null,
        location: {
          "@odata.type": "#microsoft.graph.location",
          displayName: "Customer",
          locationEmailAddress: null,
          locationUri: "",
          locationType: null,
          uniqueId: null,
          uniqueIdType: null,
          address: {
            "@odata.type": "#microsoft.graph.physicalAddress",
            type: "home",
            postOfficeBox: "",
            street: "",
            city: "",
            state: "",
            countryOrRegion: "",
            postalCode: "",
          },
          coordinates: {
            altitude: null,
            latitude: null,
            longitude: null,
            accuracy: null,
            altitudeAccuracy: null,
          },
        },
        timeZone: "America/Chicago",
        customQuestionAnswers: [
          {
            questionId: "3bc6fde0-4ad3-445d-ab17-0fc15dba0774",
            question: "What is your age",
            answerInputType: "text",
            answerOptions: [],
            isRequired: true,
            answer: "25",
            selectedOptions: [],
          },
        ],
      },
    ],
  };
  // console.log("stratDate:", date1);
  // console.log("endDate:", date2);
  // console.log("email:", email);
  // console.log("name:", name);
  axios
    .post(
      "https://graph.microsoft.com/beta/bookingBusinesses/bookingBusiness@sashat.onmicrosoft.com/appointments",
      bodyParameters,
      config
    )
    .then((response) => {
      response;
      alert("Appointment created successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}
// function addHours(numOfHours, date = new Date()) {
//   const dateCopy = new Date(date.getTime());

//   dateCopy.setTime(dateCopy.getTime() + numOfHours * 60 * 60 * 1000);

//   return dateCopy;
// }
export default getData;
