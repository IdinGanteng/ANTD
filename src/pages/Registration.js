import { Button, Form, Input } from "antd";
import {UserOutlined,MailOutlined,LockOutlined} from '@ant-design/icons'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {userRegistration} from "../service";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 0,
    },
  },
};

export const Registration = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const [userCredentials,setUserCredentials]=useState({userName:"",email:"",password:""});
  const [loadings,setLoadings]=useState([]);
  // console.log(userCredentials);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  
  const onFinish = () => userRegistration(userCredentials,navigate);

  return (
    <div className="registration">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
         <Form.Item
          name="username"
          // placeholder="Username"
          onChange={(e) => setUserCredentials({...userCredentials,userName:e.target.value})}
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Username"
                 prefix={<UserOutlined className="site-form-item-icon" />} 
                 />
        </Form.Item>
        <Form.Item
          name="email"
          
          onChange={(e) => setUserCredentials({...userCredentials,email:e.target.value})}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="please enter your email"
                 prefix={<MailOutlined className="site-form-item-icon" />}/>
        </Form.Item>

        <Form.Item
          name="password"
          
          onChange={(e) => setUserCredentials({...userCredentials,password:e.target.value})}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="please enter your password"
                          prefix={<LockOutlined className="site-form-item-icon" />}/>
        </Form.Item>

        
            <Form.Item
              name="agreement"
              valuePropName="checked"
              {...tailFormItemLayout}
            >
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit"
               disabled={userCredentials.userName && userCredentials.email && userCredentials.password ? false:true}
               onClick={()=>enterLoading(0)}
               loading={loadings[0]}>
                Register
              </Button>
            </Form.Item>
          </Form>
    </div>
  );
};