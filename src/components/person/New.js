import React,{useState} from 'react';
import { message } from 'antd';
import request from '../../utils/request';
import { useNavigate } from 'react-router-dom';
import { Form, Checkbox, Password, Text, Select, Submit } from '../utils/Form';
import { GENDER_OPTIONS } from '../../utils/constant';

function New() {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
    function handleSubmit(values){
      setLoading(true)
        console.log(values)
        request('/users',{method:'post',data:values})
        .then(({data})=>{message.success('کاربر با موفقیت ساخته شد.')
        navigate('/person')
    }) 
    .catch(err=>message.err('متاسفانه خطایی پیش آمده است.'))
    .finally(()=>setLoading(false))

    }

    return (
  <Form name="basic" onFinish={handleSubmit}>
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
export default New;