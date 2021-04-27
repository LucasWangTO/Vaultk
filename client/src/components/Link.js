import React, {Fragment} from 'react'

const Link = (props) => {
    if (props.isLink) {
        return (
            <label>{props.url}</label>
        )
    } else {
        return (
            <Fragment>
                <input type="text" value={props.url} onChange={props.handleChange}/>
                <button type="submit">Confirm</button>
            </Fragment>

        )
    }
}

export default Link;