import React from "react";
import styles from '../styles/Home.module.scss'
import ReactDOM from 'react-dom'

class Floor extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isBlink: false
        }

        this.waitingBlink = this.waitingBlink.bind(this);
        this.waitingUnBlink = this.waitingUnBlink.bind(this);
    }


    componentDidMount() {
        // const block = document.getElementById("block");
        // if (block != null) {
        //     block.addEventListener("transitionstart", this.waitingUnBlink);
        // }

    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {

    }

    waitingBlink() {
        this.setState({isBlink: true})
        // document.querySelector(".moveBlock").classList.toggle("blinkBlock");

    }

    waitingUnBlink() {

        this.setState({isBlink: false})
        console.log("BLOCK",this.state);
    }

    render() {
        //this.onMoveBlock();
        let number = this.props.position;
        let curNum: number = this.props.curPos;
        let classBlock = styles.moveBlock;
        let textFloor = "";
        let styleBlock =  {transform: `translateY(${4 * (10 - number)}vw)`,
            transitionDuration: `${Math.abs(curNum - number)}s`,
            transitionProperty: `transform`,
            transitionDelay: `0s`,
            transitionTimingFunction: "linear"};
        if (this.state.isBlink) {
            classBlock += " " + styles.blinkBlock;
        }
        if(number != curNum){
            textFloor = number.toString();
        }
        return (<div id="block" onAnimationEnd={()=>{this.waitingUnBlink();this.props.onSetBlink(this.state.isBlink)}} onAnimationStart={this.props.onSetBlink} onTransitionEnd={this.waitingBlink}
                     className={classBlock} style={styleBlock}>{textFloor}</div>)


    }

}

export default Floor;