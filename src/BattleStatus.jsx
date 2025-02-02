import "./BattleStatus.css";

function BattleStatus({ playerHealth, enemyHealth }) {
    let statusMessage;

    if (playerHealth > 0 && enemyHealth > 0) {
        statusMessage = "Engage the enemy! ☄️";
    } else if (playerHealth === 0 && enemyHealth === 0) {
        statusMessage = "It's a draw! 🤝 Both spacecrafts haave been neutralized.";
    } else if (playerHealth === 0) {
        statusMessage = "Mission Failed. 😮 Your spacecraft has been defeated.";
    } else {
        statusMessage = "Congratulations! 😎💪 You've successfully defended your spacecraft."
    }

    return (
        <div className="Battle-Status">
            <p>{statusMessage}</p>
        </div>
    );
}

export default BattleStatus;