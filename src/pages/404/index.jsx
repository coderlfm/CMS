import React, { memo } from 'react'
import { Button, Result, } from 'antd';
export default memo(function index() {
    return (
        <Result
            status="404"
            style={{
                height: '100%',
                background: '#fff',
            }}
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
        />
    )
})
