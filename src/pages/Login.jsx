import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Input, Spin } from 'antd'

const Login = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log(values);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard')
        }, 1500);
    }
    const onFinishFailed = (error) => {
        console.log(error);
    }
    return (
        <div>
            <Form
            name="basic"
            labelCol={{ span: 8, }}
            wrapperCol={{ span: 16, }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
               <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                    {
                        required: true,
                        message: "Please input your Email!"
                    }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                    {
                        required: true,
                        message: "Please input your Password!"
                    }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                 wrapperCol={{ offset: 8, }}
                >
                   <Link to="/">Forgot password</Link>
                </Form.Item>

                <Form.Item
                 wrapperCol={{ offset: 8, span: 16, }}
                >
                    {loading ? <Spin /> : <Button type="primary" htmlType="submit">Login</Button>} Or <Link to="/">register now !</Link>
                </Form.Item>
                
            </Form>
        </div>
    )
}

export default Login
