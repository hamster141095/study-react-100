import React from 'react'
import { Menu } from 'antd'
import {UserOutlined, MessageOutlined, FireOutlined, PlayCircleOutlined, ToolOutlined } from '@ant-design/icons'

const Navbar = () => {
    return (
        <div className="Navbar">
            <Menu defaultSelectedKeys={['1']}>
                <Menu.Item key='1' icon={<UserOutlined />}> Profile </Menu.Item>
                <Menu.Item key='2' icon={<MessageOutlined />}> Messages </Menu.Item>
                <Menu.Item key='3' icon={<FireOutlined/>}> News </Menu.Item>
                <Menu.Item key='4' icon={<PlayCircleOutlined />}> Music </Menu.Item>
                <Menu.Item key='5' icon={<ToolOutlined />}> Settings </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
