import React from 'react';

const validation = (props) => {
    let msg = props.inputLength > 5 ? 'OK!' : 'NO!'

    return (
        <div>
            <p>{msg}</p>
        </div>
    )
}

export default validation