import React, { memo } from 'react'

import TestTable from '@/components/testtable'

export default memo(function Table(props) {
    // console.log('table',props);
    return (
        <TestTable props={props.location.state}/>
    )
})
