const CenterSectionLayout = ({ children }) => {
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <div className="w-[80%] mx-auto">{children}</div>
    </div>
  );
};

export default CenterSectionLayout;
