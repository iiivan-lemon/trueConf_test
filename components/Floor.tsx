import React from 'react';
import styles from '../styles/Home.module.scss'

class Floor extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            position: 0,
            y: 0
        }
        this.onMoveBlock = this.onMoveBlock.bind(this);
    }

    onMoveBlock() {

    }

    render() {

        let number: number = this.props.position;
        console.log("numberFloor",number);
            return <div className={styles.moveBlock} style={{transform: `translateY(${4*(10-number)}vw)`}}></div>


    }

}


export default Floor;