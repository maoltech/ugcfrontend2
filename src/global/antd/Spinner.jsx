import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
);

const Spinner = () => <Spin indicator={antIcon} />;

export default Spinner;
