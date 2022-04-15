import React from 'react'
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Avatar, Divider, Tooltip } from 'antd';




const Login = () => {
  return (
    <div style={{marginTop:"150px"}}>

<Row>
      <Col span={8} offset={8}>
          <h1>Please Login </h1>      <Avatar src="https://joeschmoe.io/api/v1/random" style={{ height: '100px',width:'100px' }}/>

      <Input status="error" placeholder="Username" style={{marginTop:"10px"}} />

      <Input status="error" placeholder="Password" style={{marginTop:"20px"}} />

      <Button type="primary" style={{marginTop:"20px"}} >Login Here</Button>


      </Col>
    </Row>



    </div>
  )
}

export default Login