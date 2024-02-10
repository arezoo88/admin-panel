
import React, { useMemo } from 'react'
import {Table as AntTable } from 'antd'

export default function Table({columns,data,rowKey='id'}) {
    const newColumns = useMemo(()=>{
        return columns.map(column=>({
            dataIndex:column.key,
            ...column
        }))
    },[columns])
  return (
    <div>
        <AntTable dataSource={data} columns={newColumns} rowKey={rowKey} />;
    </div>

  )
}
