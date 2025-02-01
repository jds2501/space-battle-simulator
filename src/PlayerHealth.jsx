function PlayerHealth({ name, health, color }) {
    const playerColor = {
        color: color
    };

    return (
        <div style={playerColor}>
            {name} Health: {health}
        </div>
    );
}

export default PlayerHealth;