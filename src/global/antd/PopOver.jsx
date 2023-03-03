import { Button, Popover } from "antd";
import { useState } from "react";
const PopOverLay = ({ children, content, open, setOpen }) => {
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={content}
      title="Title"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      {children}
    </Popover>
  );
};
export default PopOverLay;
