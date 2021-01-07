import React from "react";

import Amarela from "../../assets/amarela.png";
import Azul from "../../assets/azul.png";
import Black from "../../assets/black.png";
import Blue from "../../assets/blue.png";
import Green from "../../assets/green.png";
import Red from "../../assets/red.png";
import Yellow from "../../assets/yellow.png";

const BLUE_ZONE = "Azul";
const RED_ZONE = "Vermelha";
const YELLOW_ZONE = "Amarela";
const BLACK_ZONE = "Preta";
const BLUE_PORTAL = "Portal Azul";
const GREEN_PORTAL = "Portal Verde";
const YELLOW_PORTAL = "Portal Amarelo";

const iconResolver = (iconName) => {
    let src;
    switch (iconName) {
        case BLUE_ZONE: src = Azul; break;
        case RED_ZONE: src = Red; break;
        case YELLOW_ZONE: src = Amarela; break;
        case BLACK_ZONE: src = Black; break;
        case BLUE_PORTAL: src = Blue; break;
        case GREEN_PORTAL: src = Green; break;
        case YELLOW_PORTAL: src = Yellow; break;
        default: src = false;
    }
    if (!src) {
        return <div></div>
    } else {
        return <img className="map-icon" src={src} alt={iconName} />
    }
}

export default iconResolver;