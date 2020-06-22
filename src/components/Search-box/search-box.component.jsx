import React from 'react'
import { Input } from 'antd';

export default function SearchBox({placeholder, changehandler}) {
    return (
        <div className="search-box">
            
            <Input type="search" placeholder={placeholder} onChange={changehandler} />
        </div>
    )
}
