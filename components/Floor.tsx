import React from 'react';
import styles from '../styles/Home.module.scss'

class Floor extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            number: 1
        }
    }

    render() {
        let number: number = this.props.number;
        let blockFloor;
        if(number == 1){
          blockFloor =
                <div className={styles.moveBlock}></div>

        }else {
            blockFloor =   ""
        }
        return (
            <div className={styles.floor}>

                <div className={styles.floorBlock}></div>
                {blockFloor}
                <div className={styles.floorNum}>
                    <span>{number}</span>
                    <button className={styles.floorBtn}></button>
                </div>
            </div>

        )
    }

}


export default Floor;