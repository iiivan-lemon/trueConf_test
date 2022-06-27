import styles from "../styles/Home.module.scss";
import React from "react";

class FloorBtn extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state={
            isActive:false
        }
        // this.toggleClass = this.toggleClass.bind(this)

    }

    // toggleClass() {
    //     this.setState({isActive:true});
    // };

    render() {
        // if(this.props.activeNum == this.props.number){
        //     this.toggleClass();
        // }
        const active = (this.state.isActive == this.props.isActive);
        const lastClick:number = (new Date()).getTime();
        let number:number = this.props.number;
        // console.log("act",this.props.isActive)
        return (
            <div className={styles.floorNum}>
                <span>{number}</span>
                <button onClick={(e) => {
                    e.preventDefault();const t = (new Date()).getTime();this.props.onClickNumFloor(number,t - lastClick);}} className={(this.state.isActive ) ? styles.activeBtn: styles.floorBtn}> </button>
            </div>
        )
    }
}

export default FloorBtn;
