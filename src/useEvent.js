import { useEffect } from "react";

export const useEvent = (event, handler, passive = false) => {
    useEffect(() => {
        // initiate the event handler
        window.addEventListener(event, handler, passive);

        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.removeEventListener(event, handler);
        };
    });
};

export const getColors = (num) => {
    switch (num) {
        case 2:
            return "#a4b0be";
        case 4:
            return "#747d8c";
        case 8:
            return "#E9A067";
        case 16:
            return "#F08151";
        case 32:
            return "#F2654F";
        case 64:
            return "#F1462C";
        case 128:
            return "#E7C65E";
        case 256:
            return "#E8C350";
        case 512:
            return "#E8BE40";
        case 1024:
            return "#E8BB31";
        case 2048:
            return "#E7B723";
        default:
            return "#C2B3A3";
    }
}

export const getColor = (num) => {
    switch (num) {
        case 2:
            return "#f7f1e3";
        case 4:
            return "#d1ccc0";
        case 8:
            return "#d1ccc0";
        case 16:
            return "#ffb142";
        case 32:
            return "#ff793f";
        case 64:
            return "#cd6133";
        case 128:
            return "#ff5252";
        case 256:
            return "#706fd3";
        case 512:
            return "#474787";
        case 1024:
            return "#33d9b2";
        case 2048:
            return "#b33939";
        default:
            return "#C2B3A3";
    }
}