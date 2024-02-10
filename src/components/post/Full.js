import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from '../../utils/request'
import { Divider } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '../../redux/actions/post'

export default function Full() {
    const {id}=useParams()
    const dispatch = useDispatch()
    const post  = useSelector(state=>state.post)
    // const [post,setPost]=useState({})
    useEffect(()=>{
        request(`/posts/${id}`).then(({data})=>dispatch(setPost(data)))
    },[])
  return (
    <div>
        <h3>نمایش مقاله</h3>
        <Divider />
        <label>عنوان</label>
        <Divider type='vertical' />
        {post.title}
        <Divider />
        <label>متن</label>
        <Divider type='vertical' />
        {post.body}
        <Divider />
        <Link to='/post'>بازگشت به لیست مقالات</Link>

    </div>
  )
}
