import React from 'react';
import { Card, Avatar, Rate, Button, Typography } from 'antd';

const { Text } = Typography;

const ServiceCard = () => {

    const rating = 5
    const titleSv = "User-Generated Content Management: Organize and Optimize Your UGC"
    const username = "@binitashara"
    const price = 500
    const image = ""
    const userAvatar = ""
  return (
    <Card
      hoverable
      style={{width: 250}}
      cover={<img alt="product" src={image} />}
      actions={[
        <Button type="primary" size="large" block>
          Order Now
        </Button>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar src={userAvatar} />}
        title={titleSv}
        description={<Text strong>{`$${price}`}</Text>}
      />
      <div style={{ marginTop: 12 }}>
        <Text strong>{username}</Text>
        <br />
        <Rate allowHalf defaultValue={rating} />
      </div>
    </Card>
  );
};

export default ServiceCard;
