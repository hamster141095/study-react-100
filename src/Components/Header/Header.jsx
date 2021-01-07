import React from 'react'
import { WeiboOutlined } from '@ant-design/icons'

const Header = () => {
    return (
        <div className="Header">
            <p>
                <WeiboOutlined  style={{ fontSize: '25px'}} />
                <span>Social Network Beta</span>
            </p>
        </div>
    )
}

export default Header
