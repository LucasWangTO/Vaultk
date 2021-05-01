import React, { Fragment } from 'react';
import CountUp from 'react-countup';

const LinkCounter = (props) => {

    return (
        <Fragment>
        <div style={{textAlign: "center"}}>
            <CountUp className="counter" start={props.start} end={props.end} duration={1.5}/>
        </div>
            <h3>Total Links Shortened</h3>
        </Fragment>
    )
}

export default LinkCounter;