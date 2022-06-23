import styles from "../styles/Home.module.scss";
import React from "react";

function FloorBtn(props:any) {
    return (
        <div className={styles.floorNum}>
            <span>{props.number}</span>
            <button className={styles.floorBtn}></button>
        </div>

    )
}