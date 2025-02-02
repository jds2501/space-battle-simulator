function PlayerAction({ actionName, actionCallback }) {
    return (
        <div>
            <button onClick={actionCallback}>{actionName}</button>
        </div>
    );
}

export default PlayerAction;