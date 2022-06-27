import Floor from "./Floor";
import FloorBtn from "./FloorBtn";
import {inspect} from "util";
import styles from '../styles/Home.module.scss'
import React from "react";

class Elevator extends React.Component<any, any> {
    private readonly queue: Array<number>;

    constructor(props: any) {

        super(props);
        this.state = {
            position: 1,
            curPos: 1,
            isBlink: false,
        }
        this.queue = [];
        this.onClickFloor = this.onClickFloor.bind(this);
        this.setBlink = this.setBlink.bind(this)
    }

    changePos(number:number){
        this.setState({curPos: this.state.position});
        this.setState({position: number})
    }

    setBlink(){
        if(this.state.isBlink){
            this.setState({isBlink:false})
            this.moveQueueFloor()
        }else this.setState({isBlink:true})

    }
    moveQueueFloor(){
        if(this.queue.length){

            this.changePos(Number(this.queue.shift()));
        }

    }


    onClickFloor(number: number,clickDelay:number) {




        if(!this.queue.length || number != this.queue[this.queue.length-1]){
            this.queue.push(number);
        }
        if(this.queue.length == 1 && !this.state.isBlink){
            this.moveQueueFloor()
        } else
        if (this.queue.length && clickDelay > Math.abs(this.state.curPos - this.state.position)*1000 && !this.state.isBlink) {
            this.moveQueueFloor()
        }
        console.log(this.queue)
        console.log(this.state,clickDelay,Math.abs(this.state.curPos - this.state.position)*1000)


    }


    render() {

        const curPos = this.state.curPos;
        const position = this.state.position;

        const level = this.props.level;
        return (
            <div className={styles.elevator}>
                <div className={styles.floors}><Floor curPos={curPos} position={position} onSetBlink={this.setBlink}/></div>
                <div className={styles.btns}>{[...Array(level)].map((e, i) => <FloorBtn key={level - i}
                                                                                        number={level - i}
                                                                                        onClickNumFloor={this.onClickFloor}/>)}</div>
            </div>
        )
    }

}

export default Elevator;