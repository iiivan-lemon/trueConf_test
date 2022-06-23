import Floor from "./Floor";
import {inspect} from "util";
import styles from '../styles/Home.module.scss'
import React from "react";

function Elevator(props: any) {
    const level = props.level;

    return (
        <div className={styles.elevator}>
            {[...Array(level)].map((e, i) => <Floor key={level - i} number={level - i}/>
            )
            }
        </div>
    )

}

export default Elevator;