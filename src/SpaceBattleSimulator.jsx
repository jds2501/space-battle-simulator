import "./SpaceBattleSimulator.css";

function SpaceBattleSimulator({ }) {
    return (
        <div class="Space-Battle-Simulator">
            <div>
                <h1 class="Space-Battle-Simulator-Header">Space Battle Simulator</h1>
            </div>
            <div class="Space-Battle-Simulator-Health-Actions">
                <div>
                    Player Health: 12
                </div>
                <div>
                    <button>Fire!</button>
                </div>
                <div>
                    Enemy Health: 48
                </div>
            </div>
            <div class="Space-Battle-Simulator-Status">
                <p>Congratulations! You've successfully defended your spacecraft!</p>
            </div>
        </div>
    )
}

export default SpaceBattleSimulator;