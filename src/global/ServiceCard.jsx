import React from 'react';
import { Card, Button, Typography } from 'antd';
import {AiFillStar} from 'react-icons/ai'
import cardimg1 from '../assets/cardimg1.png'
const { Text } = Typography;

const ServiceCard = () => {

    const rating = 4.5
    const titleSv = "User-Generated Content Management: Organize and Optimize Your UGC"
    const username = "@binitashara"
    const price = 500
    const image = cardimg1
    const count = 200

  return (
    <Card
      hoverable
      style={{width: 250}}
      cover={<img alt="product" src={image} />}
      actions={[
        <Button type="primary" size="large" block className='bg-[#0030AB] text-[#F8FAFC]'>
          Order Now
        </Button>,
      ]}
    >
      <Card.Meta
        title={<Text className='flex-wrap'> {titleSv}</Text>}
        description={``}
      />
      <div style={{ marginTop: 12 }}>
        <Text strong>{username}</Text>
        <br />
        <div className='flex justify-between'> 
          <div className='flex float w-1/2' >
            <span>
              <AiFillStar className='text-[#FAB005]'/>
            </span>
            <span>
              {rating}
              {`(${count})`}
            </span>
           
          </div>
          <div className='w-1/2 justify-end font-[600]'>
            {`$${price}`}
          </div>
          
        </div>  
      </div>
    </Card>
  );
};

export default ServiceCard;
