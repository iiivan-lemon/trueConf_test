import Floor from "./Floor";
import FloorBtn from "./FloorBtn";
import {inspect} from "util";
import styles from '../styles/Home.module.scss'
import React from "react";

class Elevator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            position: 1,
            y: 0
        }
        this.onClickFloor = this.onClickFloor.bind(this);
    }

    onClickFloor(number: number) {

        if (this.state.position < number) {
            this.setState({position: number})
        } else if (this.state.position > number) {
            this.setState({position: number})
        }

    }


    render() {
        const position = this.state.position;
        const level = this.props.level;
        return (
            <div className={styles.elevator}>
                {/*<div className={styles.floors}>{[...Array(level)].map((e, i) => <Floor key={level - i}*/}
                {/*                                                                       number={level - i}*/}
                {/*                                                                       position={position}/>)}</div>*/}
                <div className={styles.floors}><Floor position={position}/></div>

                <div className={styles.btns}>{[...Array(level)].map((e, i) => <FloorBtn key={level - i}
                                                                                        number={level - i}
                                                                                        onClickNumFloor={this.onClickFloor}/>)}</div>
            </div>
        )
    }

}

export default Elevator;