import React from 'react';
import {Button, Form, Input, message} from 'antd';
import request from "umi-request";

@Form.create()
class Home extends React.Component {

    userLogin=()=>{
        console.log("进入方法")
        const { form  } = this.props;
        form.validateFields((errors, values)=>{
            const { userName , password } = values;
        if(userName===null||password===null){
            message.warn("不允许存在空值")
            return;
        }
        const params= {userName,password}
        request.post("http://localhost:8769/api/home/pc/userLogin",{ params })

          .then(response=>{
              console.log('响应')
              console.log(response)
        })
        }
    )}


    render() {
        const { form: { getFieldDecorator } } = this.props;
        return (

                <Form>
                    <Form.Item key={"userName"} label="用户名">
                        {getFieldDecorator('userName',{
                            rules:''
                        })(<Input placeholder="用户名" />)
                        }
                    </Form.Item>
                    <Form.Item key={"passWord"} label="密码">
                        {getFieldDecorator('password',{
                            rules:''
                        })(<Input placeholder="密码" />)
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.userLogin}>登录</Button>
                    </Form.Item>
                </Form>
        )
    }
}

export default Home;