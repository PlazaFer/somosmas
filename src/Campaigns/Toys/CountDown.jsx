import { useEffect, useState } from "react";
import { useStyles } from "./Styles/countDown";
import { Typography, Box} from "@mui/material";

const CountDown = () => {
  

  const dateTarget = new Date("08/14/2022 4:00 PM");

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  // aca estamos probando

  const milliseconds_of_a_Second = 1000;
  const milliseconds_of_a_minute = milliseconds_of_a_Second * 60;
  const milliseconds_of_a_hour = milliseconds_of_a_minute * 60;
  const milliseconds_of_a_day = milliseconds_of_a_hour * 24;

  function updateCountdown() {
    // Calcs
    const now = new Date();
    const duration = dateTarget - now;
    const remainingDays = Math.floor(duration / milliseconds_of_a_day);
    const remainingHours = Math.floor(
      (duration % milliseconds_of_a_day) / milliseconds_of_a_hour
    );
    const remainingMinutes = Math.floor(
      (duration % milliseconds_of_a_hour) / milliseconds_of_a_minute
    );
    const remainingSeconds = Math.floor(
      (duration % milliseconds_of_a_minute) / milliseconds_of_a_Second
    );

    setDays(remainingDays);
    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);
  }

  useEffect(() => {
    setInterval(updateCountdown, milliseconds_of_a_Second);
  });

  const classes = useStyles();

  return (
      <>
         <Typography className={classes.subtx} >
            La cita sera el dia 14 de agosto del 2022 en Facultad de derecho de la ciudad de Buenos Aires</Typography>
          <Typography className={classes.number}>Quedan {days} Días, {hours} Horas y {minutes} Minutos</Typography>
    </>
  );
};

export default CountDown;
