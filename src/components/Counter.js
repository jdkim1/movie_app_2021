import React, { useState, useEffect } from 'react'

//  commit 수정 테스트
const Counter =(props)=>{

    const [count, setCount] = useState(0);
    // 컴포넌트가 렌더링될때마다 특정 작업을 수행하는 Hook
    // (component가 mount, unmount, update 될때 실행)  ==> 생명주기 메소드
    useEffect(()=>{
        console.log(count);
    },[count]);

    const increment =() =>{
        setCount(count + 1);
    };

    return (
        <button onClick={increment}>{props.name} Button Click Me {count}</button>
    );

};

export default Counter;