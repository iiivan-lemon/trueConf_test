import styles from "../styles/Home.module.scss";
import React from "react";

class FloorBtn extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state={
            isActive:false
        }


    }

    render() {

        const lastClick:number = (new Date()).getTime();
        let number:number = this.props.number;
        return (
            <div className={styles.floorNum}>
                <span>{number}</span>
                <button onClick={(e) => {
                    e.preventDefault();const t = (new Date()).getTime();this.props.onClickNumFloor(number,t - lastClick);}} className={styles.floorBtn}> </button>
            </div>
        )
    }
}
export default FloorBtn;
