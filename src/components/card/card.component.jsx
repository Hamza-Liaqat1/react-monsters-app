import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export const CardData = (props) => {
    return (
        <div className="card-container">
            
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={`https://robohash.org/${props.monster.id}?set=set2`} /> }
                >
                <Meta title={props.monster.name} description={props.monster.website} />
            </Card>
            </div>
    
    )
}
