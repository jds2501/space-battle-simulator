import BattleStatus from "./BattleStatus";
import PlayerHealth from "./PlayerHealth";
import "./SpaceBattleSimulator.css";

function SpaceBattleSimulator({ }) {
    return (
        <div class="Space-Battle-Simulator">
            <div>
                <h1 class="Space-Battle-Simulator-Header">Space Battle Simulator</h1>
            </div>
            <div class="Space-Battle-Simulator-Health-Actions">
                <PlayerHealth name={"Player"} health={100} color={"green"} />
                <div>
                    <button>Fire!</button>
                </div>
                <PlayerHealth name={"Enemy"} health={80} color={"red"} />
            </div>
            <BattleStatus message={"Congratulations!"} />
        </div>
    );
}

export default SpaceBattleSimulator;