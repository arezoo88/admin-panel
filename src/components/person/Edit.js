import React,{useEffect, useState} from 'react';
import { message } from 'antd';
import request from '../../utils/request';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Checkbox, Password, Text, Select, Submit } from '../utils/Form';
import { GENDER_OPTIONS } from '../../utils/constant';
import Spinner from '../utils/Spinner';
import { getPerson } from '../../redux/actions/person';
import { useDispatch, useSelector } from 'react-redux';

function Edit() {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
  const {id}=useParams()
  // const [person,setPerson]=useState({})

  const dispatch = useDispatch()
  const person = useSelector(state=>state.person)

  useEffect(()=>{
      dispatch(getPerson(id))
  },[])

  function handleSubmit(values){
      setLoading(true)
        console.log(values)
        request('/users',{method:'put',data:values})
        .then(({data})=>{message.success('کاربر با موفقیت به روز رسانی شد.')
        navigate('/person')
    }) 
    .catch(err=>message.err('متاسفانه خطایی پیش آمده است.'))
    .finally(()=>setLoading(false))

    }
    if(!person.id){
        return <Spinner />
    }

    return (
  <Form name="basic" onFinish={handleSubmit} initialValues={person}>
    <Text label="نام" name="name" required />
    <Text label="نام کاربری" name="username" required />
    <Password label="رمز عبور" name="password" required />
    <Checkbox name="admin">مدیر</Checkbox>
    <Select name='gender' label='جنسیت'
     required placeholder="لطفا جنسیت را انتخاب کنید."
     allowClear 
     options={GENDER_OPTIONS}
     
     />
    <Submit loading={loading} />
  </Form>
    )
};
export default Edit;