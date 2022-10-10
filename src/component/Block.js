import { getColors, getColor } from "../useEvent";

export default function Block({ num }) {
    const { blockStyle } = style;

    return (
        <div
            style={{
                ...blockStyle,
                background: getColor(num),
                color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",
            }}
        >
            {num !== 0 ? num : ''}
            
        </div>
    )
}

const style = {
    blockStyle: {
        height: 80,
        width: 80,
        background: "#f1f2f6",
        margin: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 45,
        fontWeight: "600",
        color: "white",
    }
};