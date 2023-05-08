import React, {useState} from "react";
import { Button } from 'antd';

const Overview=()=>{
    const [size] = useState('large'); // default is 'middle'
    return(
        <div>
            <Button type="primary" size={size}>启动网络</Button>
        </div>
    )
}

export default Overview