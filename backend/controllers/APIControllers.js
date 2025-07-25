import dotenv from "dotenv";

export const postData = (req, res) => {
  dotenv.config();
  const { data } = req.body;
  console.log("Received date:", data);
  res.status(200).json({ message: "Date received successfully", date });
};

export const getData = (req, res) => {
  console.log(req.query.sentData);
  res
    .status(200)
    .json({ message: "Hello from the backend!", id: req.query.sentData });
};
