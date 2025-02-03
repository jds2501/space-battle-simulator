import { useState } from "react";
import BattleStatus from "./BattleStatus";
import PlayerAction from "./PlayerAction";
import PlayerHealth from "./PlayerHealth";
import "./SpaceBattleSimulator.css";

function getRandomNum(range) {
    return Math.floor(Math.random() * range);
}

function getResultingHealth(currentHealth, damage) {
    let newPlayerHealth = currentHealth - damage;

    if (newPlayerHealth < 0) {
        newPlayerHealth = 0;
    }

    return newPlayerHealth;
}

function SpaceBattleSimulator({ playerDamageRange = 30, enemyDamageRange = 30 }) {
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [playerHealth, setPlayerHealth] = useState(100);

    function fire() {
        const playerDamage = getRandomNum(playerDamageRange);
        setPlayerHealth(playerHealth => getResultingHealth(playerHealth, playerDamage));

        const enemyDamage = getRandomNum(enemyDamageRange);
        setEnemyHealth(enemyHealth => getResultingHealth(enemyHealth, enemyDamage));
    }

    function restart() {
        setEnemyHealth(100);
        setPlayerHealth(100);
    }

    function action() {
        if (enemyHealth === 0 || playerHealth === 0) {
            restart();
        } else {
            fire();
        }
    }

    return (
        <div className="Space-Battle-Simulator">
            <div>
                <h1 className="Space-Battle-Simulator-Header">Space Battle Simulator</h1>
            </div>
            <div className="Space-Battle-Simulator-Health-Actions">
                <PlayerHealth name={"Player"} health={playerHealth} color={"green"} />
                <PlayerAction playerHealth={playerHealth} enemyHealth={enemyHealth} actionCallback={action} />
                <PlayerHealth name={"Enemy"} health={enemyHealth} color={"red"} />
            </div>
            <BattleStatus playerHealth={playerHealth} enemyHealth={enemyHealth} />
        </div>
    );
}

export default SpaceBattleSimulator;