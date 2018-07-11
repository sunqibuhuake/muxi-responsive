/**
 * Created by sunqi on 2018/6/11.
 */
import {Col, Row} from 'antd'
import React from 'react'

import SortHalf from './SortHalf'
export default function(props) {
    const zh = [
        {
            name: '时间',
            index: 'date'
        },
        {
            name: '地点',
            index: 'location'
        },
        {
            name: '委托人',
            index: 'client'
        },
        {
            name: '类型',
            index: 'service'
        }
    ]
    const en = [
        {
            name: 'Time',
            index: 'date'
        },
        {
            name: 'Location',
            index: 'location'
        },
        {
            name: 'Client',
            index: 'client'
        },
        {
            name: 'Service',
            index: 'service'
        }
    ]

    return(
        <div className="sort-row">
            <SortHalf
                label="排序方式:"
                list={zh}
            ></SortHalf>
            <SortHalf
                label="Sort by:"
                list={en}
            ></SortHalf>

        </div>
    )
}