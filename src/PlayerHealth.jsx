function PlayerHealth({ name, health, color }) {
    const playerColor = {
        color: color
    };

    let healthEmoji;

    if (health === 100) {
        healthEmoji = "❤️";
    } else if (health > 0) {
        healthEmoji = "❤️‍🩹";
    } else {
        healthEmoji = "💀";
    }

    return (
        <div style={playerColor}>
            {name} Health: {health} {healthEmoji}
        </div>
    );
}

export default PlayerHealth;