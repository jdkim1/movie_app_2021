import React, { Fragment, useState } from 'react';

function Potato(){

    const [text1, setText1] = useState('Hello')

    // let text1 = 'Hello~!'

    const onPressMe = () =>{
        // text1 = 'World~~!!'
        setText1('World!')
        console.log(text1); 
    };

    return (
        <Fragment>
            <h3>I love potato!</h3>
            <span>{text1}</span>
            <button onClick={onPressMe}>Update</button>
        </Fragment>
    )
}

export default Potato;