import React, { Fragment, useState } from 'react'

function Apple(){

    const [username, setUsername] = useState('');   // 변수,초기값 설정 및
    const [password, setPassword] = useState('');

    const onSubmit = (e) =>{
        // console.log("사과 전송");
        // form은 submit하면 새로고침하는 특성
        // > preventDefault는 새로고침을 막는다.
        e.preventDefault();
        console.log(username, password);
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <input placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>
                <input placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/>
                <button type="submit">Login</button>
            </form>
        </Fragment>
    )
}

export default Apple;