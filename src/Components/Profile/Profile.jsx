import React from 'react'
import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import MyPost from './MyPost/MyPost';

const Profile = () => {
    return (
        <div className="ProfileWrapper">
            <div className="ProfileInfo">
                <Avatar size={100} icon={<UserOutlined />} shape='square' />
                <div className="site-card-border-less-wrapper">
                    <Card title="Viking Killer Roman" bordered={false} style={{ width: 300 }}>
                    <p>Date birth: 2 juanvary</p>
                    <p>City: Rome</p>
                    <p>Education: Barbarian US</p>
                    <p>Web Site: www.Roman-village.com</p>
                    </Card>
                </div>
            </div>
            <MyPost/>
        </div>
    )
}

export default Profile
