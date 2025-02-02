import "./PlayerAction.css";

function PlayerAction({ actionName, actionCallback }) {
    return (
        <div className="PlayerAction">
            <button onClick={actionCallback}>{actionName}</button>
        </div>
    );
}

export default PlayerAction;