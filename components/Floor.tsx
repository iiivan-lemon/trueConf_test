import React from "react";
import styles from '../styles/Home.module.scss'

class Floor extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isBlink: false
        }

        this.waitingBlink = this.waitingBlink.bind(this);
        this.waitingUnBlink = this.waitingUnBlink.bind(this);
    }

    waitingBlink() {
        this.setState({isBlink: true})
    }

    waitingUnBlink() {
        this.setState({isBlink: false})
    }

    checkDirection(): string {
        if (this.props.position > this.props.curPos) {
            return "▲"
        } else if (this.props.position < this.props.curPos) {
            return "▼"
        }
        return ""
    }

    render() {

        const number = this.props.position;
        const curNum: number = this.props.curPos;
        let classBlock = styles.moveBlock;
        let textFloor = "";
        const styleBlock = {
            transform: `translateY(${4 * (10 - number)}vw)`,
            transitionDuration: `${Math.abs(curNum - number)}s`,
            transitionProperty: `transform`,
            transitionDelay: `0s`,
            transitionTimingFunction: "linear"
        };
        if (this.state.isBlink) {
            classBlock += " " + styles.blinkBlock;
        }
        if (number != curNum) {
            textFloor = number.toString();
        }
        textFloor += this.checkDirection();

        return (<div onAnimationEnd={() => {
            this.waitingUnBlink();
            this.props.onSetBlink()
        }} onAnimationStart={()=>{this.props.onSetBlink(number)}} onTransitionEnd={this.waitingBlink}
                     className={classBlock} style={styleBlock}>{textFloor}</div>)
    }
}

export default Floor;