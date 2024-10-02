const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  const { firstName, lastName, date, time, email, phone } = req.body;
  try {
    const newReservation = new Reservation({
      firstName,
      lastName,
      date,
      time,
      email,
      phone
    });
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
