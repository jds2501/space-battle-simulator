import BattleStatus from "./BattleStatus";
import PlayerHealth from "./PlayerHealth";
import "./SpaceBattleSimulator.css";

function SpaceBattleSimulator({ }) {
    let enemyHealth = 0;
    let playerHealth = 80;

    return (
        <div class="Space-Battle-Simulator">
            <div>
                <h1 class="Space-Battle-Simulator-Header">Space Battle Simulator</h1>
            </div>
            <div class="Space-Battle-Simulator-Health-Actions">
                <PlayerHealth name={"Player"} health={playerHealth} color={"green"} />
                <div>
                    <button>Fire!</button>
                </div>
                <PlayerHealth name={"Enemy"} health={enemyHealth} color={"red"} />
            </div>
            <BattleStatus playerHealth={playerHealth} enemyHealth={enemyHealth} />
        </div>
    );
}

export default SpaceBattleSimulator;