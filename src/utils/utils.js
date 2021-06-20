const RED = "R";
const BLACK = "BK";
const YELLOW = "Y";
const BLUE = "BE"
const PORTAL_AVALON_ROYAL = "P_ROYAL";
const PORTAL_AVALON_LOW = "P_LOW";
const PORTAL_AVALON_MEDIUM = "P_MEDIUM";
const PORTAL_AVALON_HIGH = "P_HIGH";
const PORTAL_AVALON_BLACK_LOW = "P_BLACK_LOW";
const PORTAL_AVALON_BLACK_MEDIUM = "P_BLACK_MEDIUM";
const PORTAL_AVALON_BLACK_HIGH = "P_BLACK_HIGH";
const TUNNEL_DEEP = "P_PROFUNDO";
const TUNNEL_HIDEOUT = "P_HIDEOUT";
const TUNNEL_HIDEOUT_DEEP = "P_HIDEOUT_PROFUNDO";

const GREEN_CHEST = "G_CHEST";
const BLUE_CHEST = "B_CHEST";
const YELLOW_CHEST = "Y_CHEST";

const SOLO_DUNGEON = "S_DG";
const GROUP_DUNGEON = "G_DG";
const ELITE_DUNGEON = "E_DG";

const mapType = type => {
    switch(type) {
        case RED: return "Zona Vermelha" ;
        case BLACK: return "Zona Preta";
        case YELLOW: return "Zona Amarela";
        case BLUE: return  "Zona Azul";
        case PORTAL_AVALON_ROYAL: return "Portal Avalon Royal";
        case PORTAL_AVALON_LOW: return "Túnel Avalon Low";
        case PORTAL_AVALON_MEDIUM: return "Túnel Avalon Medium";
        case PORTAL_AVALON_HIGH: return "Túnel Avalon High";
        case PORTAL_AVALON_BLACK_LOW: return "Portal Low Black";
        case PORTAL_AVALON_BLACK_MEDIUM: return "Portal Medium Black";
        case PORTAL_AVALON_BLACK_HIGH: return "Portal High Black";
        case TUNNEL_DEEP: return "Túnel Profundo";
        case TUNNEL_HIDEOUT: return "Túnel Hideout";
        case TUNNEL_HIDEOUT_DEEP: return "Túnel Hideout Profundo";
        default: return "";
    }
}

const mapMarkers = (markers) => {
    let mappedMarkers = [];
    
    if (markers && markers.length > 0) {
        mappedMarkers = markers.map(item => {
            switch (item) {
                case YELLOW_CHEST: return "Baú Dourado";
                case GREEN_CHEST: return "Baú Verde";
                case BLUE_CHEST: return "Baú Azul";
                case ELITE_DUNGEON: return "DG Avalon";
                case GROUP_DUNGEON: return "DG de Grupo";
                case SOLO_DUNGEON: return "DG Solo";
                case "F": return "Fibra";
                case "H": return "Pelego";
                case "O": return "Minério";
                case "S": return "Pedra";
                case "W": return "Madeira";
                default: return undefined;
            }
        })
    }
    return mappedMarkers;
}

const methods = {
    mapType,
    mapMarkers
}

export default methods;