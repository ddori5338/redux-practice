import React from 'react'
import { useSelector } from 'react-redux'
import GrandBox from './GrandBox';

const Box = () => {
    let count = useSelector(state => state.count);
    return (
        <div>
            this is box {count}
            <GrandBox/>
        </div>
    )
}

export default Box
