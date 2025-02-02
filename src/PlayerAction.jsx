import "./PlayerAction.css";

const RESTART_STYLE = {
    backgroundColor: "black",
    color: "white",
    border: "10px solid white"
}

const FIRE_STYLE = {
    backgroundColor: "#ff8d11",
    color: "white",
    border: "10px solid #fe2122"
}

function PlayerAction({ playerHealth, enemyHealth, actionCallback }) {
    let buttonColor = FIRE_STYLE;
    let actionName = "Fire!";

    if (playerHealth === 0 || enemyHealth === 0) {
        buttonColor = RESTART_STYLE;
        actionName = "Restart?";
    }

    return (
        <div className="PlayerAction">
            <button style={buttonColor} onClick={actionCallback}>{actionName}</button>
        </div>
    );
}

export default PlayerAction;