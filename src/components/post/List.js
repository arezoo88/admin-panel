// import { Table } from 'antd/lib'
import React, { useEffect, useState } from 'react'
import request from '../../utils/request'
import {Link} from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import {connect} from 'react-redux'
import { setPosts } from '../../redux/actions/post'
import Table from '../utils/Table'

const columns = [
    {
        title: 'شناسه',
        key: 'id',
    },
    {
        title: 'عنوان',
        key: 'title',
    },
    {
        key: 'action',
        render:(_,rec)=>(
            <>
                <Link to={`/post/${rec.id}`}>
                    <EyeOutlined />
                </Link>
            </>
            
        )
    }
]

function List(props) {
    //  const [posts,setPosts]= useState([])
    useEffect(()=>{
        request('/posts').then(({data})=>
            props.setItems(data)
        )
    },[])
  return (
    <div>
        <Table data={props.posts} columns={columns} />;
    </div>
  )
}


const mapStateToProps=(state)=>{
    return {posts:state.posts}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setItems:data=>dispatch(setPosts(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)