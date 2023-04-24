import React from "react"
import { observer } from 'mobx-react-lite';
import { Button, Space } from 'antd';


const LayOut = () => {
    return (
        <div>
            <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>
        </div>

    )
}
export default LayOut