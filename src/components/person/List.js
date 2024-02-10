// import { Table } from 'antd/lib'
import React, { useEffect } from 'react'
// import request from '../../utils/request'
import {Link} from 'react-router-dom'
import { EyeOutlined,EditFilled } from '@ant-design/icons'
import { connect } from 'react-redux'
import { getPeople } from '../../redux/actions/person'
import Table from '../utils/Table'
const columns = [
    {
        title: 'شناسه',
        key: 'id',
    },
    {
        title: 'نام',
        key: 'name',
    },
    {
        title: 'نام کاربری',
        key: 'username',
    },
    {
        title: 'آدرس',
        key: 'address',
        render:(el,record)=>{
            return `${el.street}  ${el.suite}`
        }
    },  
    {
        title: 'شماره تماس',
        key: 'phone',
    },
    {
        title: 'وب سایت',
        key: 'website',
    },
    {
        key: 'action',
        render:(_,rec)=>(
            <>
                <Link to={`/person/${rec.id}`}>
                    <EyeOutlined />
                </Link>
                <Link to={`/person/${rec.id}/edit`}>
                    <EditFilled />
                </Link>
            </>
            
        )
    }
]
function List(props) {
    // console.log(555,props)
    // const [people,setPeople]= useState([])
    useEffect(()=>{
        props.getItems()
    },[])
  return (
    <div>
        <Table data={props.people} columns={columns} />;
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {people:state.people}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        // setItems:data=>dispatch(setPoeple(data))
        getItems: () => dispatch(getPeople())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)