import Header from "../Header";
import { Outlet } from "react-router-dom";

const SessionLayout = () => {
  return (
    <div className="w-full overflow-hidden mx-auto flex flex-col items-start justify-start gap-[2rem]">
      <Header />
      <Outlet />
    </div>
  );
};

export default SessionLayout;
