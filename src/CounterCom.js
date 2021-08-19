// import React, { Fragment, useState } from 'react'

import React, { Fragment, useEffect, useState } from 'react'
import Counter from './components/Counter';

// Counter 컴포넌트에서의 기본 props값 정의함.
Counter.defaultProps={
    name : 'xxx'
}

function CounterCom(){
    // const [count , setCount] = useState(0);
    // const [num , setNum] = useState(0);
    // // 컴포넌트가 렌더링될때마다 특정 작업을 수행하는 Hook
    // // (component가 mount, unmount, update 될때 실행)  ==> 생명주기 메소드
    // useEffect(()=>{
    //     console.log(count);
    //     console.log(num);
    // },[count]);

    // // useEffect는 여러번 정의할 수 있고, 실행 조건에 [] 빈 배열을 넣으면 , 컴포넌트 최초 실행시에만 실행
    // useEffect(()=>{
    //     console.log('first ~~~')
    // },[]);

    // const UpCounter =()=>{
    //     setCount(count + 1)
    //     console.log("count:" + count)
    // };

    // JSX 리턴
    return (
        <Fragment>
            <h1>1</h1>
            <Counter /><Counter name='button2'/><Counter name='button3'/>
            
            
            {/* <button onClick={UpCounter}>클릭 {count}</button>
            <button onClick={()=>{setNum(num+1)}}>클릭_num</button>
            <span>{count}</span> */}

        </Fragment>
    );
}

export default CounterCom;