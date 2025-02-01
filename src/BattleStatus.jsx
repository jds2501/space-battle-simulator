import "./BattleStatus.css";

function BattleStatus({ message }) {
    return (
        <div class="Battle-Status">
            <p>{message}</p>
        </div>
    );
}

export default BattleStatus;