import axios from "axios";
import moment from "moment";
export default async function handler(req, res) {
  // const { CustomerName, CustomerPhone } = JSON.parse(req.body);
  // console.log("CustomerName: ", req.body);
  //   console.log("CustomerPhone: ", req.body.CustomerPhone);
  // console.log(
  //   "CustomerName: ",
  //   moment(req.body.EndTime, "MM/DD/YYYY HH:mm:ss A").format(
  //     "YYYY-MM-DDTHH:mm:ss"
  //   )
  // );
  // console.log("Date: ", req.body.EndTime);
  await axios.post(`http://localhost:1337/api/bookings`, {
    data: {
      CustomerName: req.body.CustomerName,
      CustomerEmail: req.body.CustomerEmail,
      BookingDate: moment(req.body.EndTime, "MM/DD/YYYY HH:mm:ss A").format(
        "YYYY-MM-DDTHH:mm:ss"
      ),
      AppointmentId: req.body.Id,
    },
  });
  res.status(200).json({ message: "Success" });
}
