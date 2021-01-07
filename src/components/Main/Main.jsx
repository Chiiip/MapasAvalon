import React, { useState, useEffect } from "react";
import AvalonCard from "../AvalonCard/AvalonCard";
import NewAvalon from "../NewAvalon/NewAvalon";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import avalonRouteService from "../../services/avalonRouteService";

const Main = () => {
  const [showNewAvalon, setShowNewAvalon] = useState(false);

  useEffect(() => {
    avalonRouteService.listAllRoutes().then((data) => {
      setFirebaseCards(Object.values(data.data).reverse());
    });
  }, []);

  const [firebaseCards, setFirebaseCards] = useState([]);

  return (
    <div>
      <div id="cards-container">
        {firebaseCards.map((item) => {
          return (
            <>
              <AvalonCard {...item} />
            </>
          );
        })}
      </div>
      <Button
        variant="contained"
        onClick={() => {
          setShowNewAvalon(true);
        }}
        color="primary"
        size="large"
      >
        Cadastrar Nova Rota
      </Button>
      <Fade in={showNewAvalon} unmountOnExit>
        <div>
          <NewAvalon
            closeCallback={() => {
              setShowNewAvalon(false);
              avalonRouteService.listAllRoutes().then((data) => {
                setFirebaseCards(Object.values(data.data).reverse());
              });
            }}
          />
        </div>
      </Fade>
    </div>
  );
};

export default Main;
