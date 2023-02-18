import React from "react";
import { Card, Typography } from "antd";
import Button from "./Button";
import { AiFillStar } from "react-icons/ai";
import cardimg1 from "../assets/cardimg1.png";
const { Text } = Typography;

const ServiceCard = () => {
  const rating = 4.5;
  const titleSv =
    "User-Generated Content Management: Organize and Optimize Your UGC";
  const username = "@binitashara";
  const price = 500;
  const image = cardimg1;
  const count = 200;

  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={<img alt="product" src={image} />}
      actions={[
        <Button
          onClick={() => {
            console.log("clicked");
          }}
          className="bg-[#0030AB] text-[0.8rem] text-white w-[90%] m-auto"
        >
          Order Now
        </Button>,
      ]}
    >
      <Card.Meta
        style={{ margin: "auto", padding: "" }}
        title={""}
        description={
          <Text className="font-[500] leading-[10px]"> {titleSv}</Text>
        }
      />
      <div
        style={{ marginTop: "" }}
        className="flex flex-col items-start justify-start gap-[0.5rem]"
      >
        <div className="">{username}</div>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-[0.5rem]">
            <span>
              <AiFillStar className="text-[#FAB005]" />
            </span>
            <span>
              {rating}
              {`(${count})`}
            </span>
          </div>
          <div className="font-[600]">{`$${price}`}</div>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
