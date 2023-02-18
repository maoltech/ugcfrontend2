const ButtonOverlay = ({ children }) => {
  return (
    <div className="absolute top-[50%] left-0 translate-y-[-50%] rounded-[5px] bg-white/[70%] flex justify-center items-center m-auto h-full w-full">
      {children}
    </div>
  );
};

export default ButtonOverlay;
