import { Button, Popover } from "antd";
import { useState } from "react";
const PopOverLay = ({ children, content, open, setOpen, title }) => {
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={content}
      title={title}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      className="p-[0]"
    >
      {children}
    </Popover>
  );
};
export default PopOverLay;
