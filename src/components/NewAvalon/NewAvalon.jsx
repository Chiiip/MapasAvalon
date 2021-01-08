import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import avalonRouteService from "../../services/avalonRouteService";
import moment from "moment";

const BLUE_ZONE = "Azul";
const RED_ZONE = "Vermelha";
const YELLOW_ZONE = "Amarela";
const BLACK_ZONE = "Preta";
const BLUE_PORTAL = "Portal Azul";
const GREEN_PORTAL = "Portal Verde";
const YELLOW_PORTAL = "Portal Amarelo";
const HO = "Rota Hideout";
const DUNGEON = "Rota DG Avalon";
const ROYAL = "Rota Arthur - Royal";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: "2rem",
    backgroundColor: "#9bb7f5",
    color: "white",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,
    marginBottom: 12,
  },
}));

const defaultInitialValue = () => ({
  nome: "",
  tempoFechar: undefined,
  tipo: BLUE_PORTAL,
});

const calculateCloseDate = (time) => {
  if (time) {
    const now = moment(new Date());
    now.add(parseInt(time.substring(0, 2)), "hours");
    now.add(parseInt(time.substring(3, 5)), "minutes");
    return now.toDate();
  } else {
    return time;
  }
};

const NewAvalon = (props) => {
  const classes = useStyles();

  const createRoute = () => {
    const route = {
      criador: user,
      tipoRota: routeType,
      mapas: inputs.map((item) => ({
        nome: item.nome,
        tipo: item.tipo,
        tempoFechar: calculateCloseDate(item.tempoFechar),
      })),
    };


    avalonRouteService.addRoute(route).then(() => {
      props.closeCallback()
    });
  };

  const handleMapChange = (e, idx, prop) => {
    const updatedInputs = [...inputs];
    updatedInputs[idx][prop] = e.target.value;
    setInputs(updatedInputs);
  };

  const addNewInput = () => {
    setInputs([...inputs, defaultInitialValue()]);
  };

  const removeInput = () => {
    if (inputs.length > 1) {
      const updatedInputs = [...inputs];
      updatedInputs.pop();
      setInputs(updatedInputs);
    }
  };

  const [inputs, setInputs] = useState([defaultInitialValue()]);
  const [user, setUser] = useState("");
  const [routeType, setRouteType] = useState(HO);
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div>
          <form onSubmit={createRoute}>
            <div className="input-line">
              <TextField
                id="usuario"
                value={user}
                onChange={(evt) => setUser(evt.target.value)}
                label="Cadastrado por"
              />
              <Select
                id="tipo-rota"
                value={routeType}
                onChange={(evt) => {
                  setRouteType(evt.target.value);
                }}
              >
                <MenuItem value={HO}>{HO}</MenuItem>
                <MenuItem value={DUNGEON}>{DUNGEON}</MenuItem>
                <MenuItem value={ROYAL}>{ROYAL}</MenuItem>
              </Select>
            </div>
            {inputs.map((item, idx) => {
              return (
                <div key={idx} className="input-line">
                  <TextField
                    value={inputs[idx].nome}
                    onChange={(evt) => handleMapChange(evt, idx, "nome")}
                    required
                    id="nome"
                    label="Nome do Mapa"
                  />
                  <Select
                    id="tipo"
                    value={inputs[idx].tipo}
                    onChange={(evt) => {
                      handleMapChange(evt, idx, "tipo");
                    }}
                  >
                    <MenuItem value={BLUE_PORTAL}>Portal Avalon Azul</MenuItem>
                    <MenuItem value={GREEN_PORTAL}>
                      Portal Avalon Verde
                    </MenuItem>
                    <MenuItem value={YELLOW_PORTAL}>
                      Portal Avalon Amarelo
                    </MenuItem>
                    <MenuItem value={BLUE_ZONE}>Zona Azul</MenuItem>
                    <MenuItem value={RED_ZONE}>Zona Vermelha</MenuItem>
                    <MenuItem value={YELLOW_ZONE}>Zona Amarela</MenuItem>
                    <MenuItem value={BLACK_ZONE}>Zona Preta</MenuItem>
                  </Select>
                  <TextField
                    id="tempo"
                    type="time"
                    value={inputs[idx].tempoFechar}
                    onChange={(evt) => handleMapChange(evt, idx, "tempoFechar")}
                    className={classes.textField}
                    InputLabelProps={{ shrink: true }}
                    label="Tempo até Fechar"
                  />
                </div>
              );
            })}
            <Button
              variant="contained"
              onClick={() => {
                addNewInput();
              }}
              color="primary"
              size="large"
              id="add-button"
            >
              Adicionar
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                removeInput();
              }}
              color="secondary"
              size="large"
              id="remove-button"
            >
              Remover
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                createRoute();
              }}
              color="primary"
              size="large"
            >
              Cadastrar
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewAvalon;
