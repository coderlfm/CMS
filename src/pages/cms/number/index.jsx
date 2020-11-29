import React, { memo } from 'react'

import TestTable from '@/components/testtable'

export default memo(function Number(props) {
    return (
        <TestTable props={props.location.state}/>
    )
})
