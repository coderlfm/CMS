import React, { memo } from 'react'

import TestTable from '@/components/testtable'

export default memo(function Date(props) {
    return (
        <TestTable props={props.location.state} />
    )
})
