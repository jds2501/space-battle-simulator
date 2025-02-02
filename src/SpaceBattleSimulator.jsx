import BattleStatus from "./BattleStatus";
import PlayerAction from "./PlayerAction";
import PlayerHealth from "./PlayerHealth";
import "./SpaceBattleSimulator.css";

function SpaceBattleSimulator({ }) {
    let enemyHealth = 0;
    let playerHealth = 80;

    return (
        <div className="Space-Battle-Simulator">
            <div>
                <h1 className="Space-Battle-Simulator-Header">Space Battle Simulator</h1>
            </div>
            <div className="Space-Battle-Simulator-Health-Actions">
                <PlayerHealth name={"Player"} health={playerHealth} color={"green"} />
                <PlayerAction actionName={"Fire!"} actionCallback={() => {
                    console.log("Click!");
                }} />
                <PlayerHealth name={"Enemy"} health={enemyHealth} color={"red"} />
            </div>
            <BattleStatus playerHealth={playerHealth} enemyHealth={enemyHealth} />
        </div>
    );
}

export default SpaceBattleSimulator;