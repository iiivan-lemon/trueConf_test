import styles from "../styles/Home.module.scss";
import React from "react";

class FloorBtn extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }

    render(){

        let number = this.props.number;
        return (
            <div className={styles.floorNum}>
                <span>{number}</span>
                <button onClick={(e)=>{e.preventDefault();this.props.onClickNumFloor(number);}} className={styles.floorBtn}></button>
            </div>

        )
    }
}
export default FloorBtn;
