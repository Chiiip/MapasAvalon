import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import iconResolver from "../MapIconResolver/MapIconResolver";
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "2rem",
    backgroundColor: "#424242",
    color: "white",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,
    marginBottom: 12,
  },
});

const calcularTempoFaltaFechar = (tempoFechar) => {
  if (tempoFechar) {
  const firstDate = moment(tempoFechar);
  const secondDate = moment(new Date());
  const duration = moment.duration(firstDate.diff(secondDate));
  const hours = parseInt(duration.asHours());
  const minutes = parseInt(duration.asMinutes()) % 60;

  return hours > 0 || minutes > 0 ? "Fecha em " + hours + "h " + minutes + "m" : "Fechada";
  } else {
    return "----"
  }
};

const isUpToDate = (mapas, timer) => {
  let result = false;

  mapas.forEach(item => {
    if (calcularTempoFaltaFechar(item.tempoFechar).includes("Fecha em")) {
      result = true;
    }
  });

  return result;
}

const AvalonCard = (props) => {
  const classes = useStyles();
  const [timer, setTimer] = useState(new Date());
  let isUpdated = isUpToDate(props.mapas, timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.tipoRota}
        </Typography>
        <Typography className={`${classes.pos} ${isUpdated ? "green" : "red"}`}>
          { isUpdated ?  "ROTA ATUALIZADA" : "ROTA DESATUALIZADA"}
        </Typography>
        <Typography variant="h2" component="h2"></Typography>
        {props.mapas.map((item) => {
          return (
            <Typography className="map-description" variant="body1" component="p">
              {item.nome + " "}
              {iconResolver(item.tipo)}
              <span>{calcularTempoFaltaFechar(item.tempoFechar)}</span> 
            </Typography>
          );
        })}
        <Typography className={classes.pos} color="textSecondary">
          Cadastrada por {props.criador}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AvalonCard;
