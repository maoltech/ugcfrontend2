import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
const Input = ({
  type,
  placeholder,
  label,
  prefix,
  suffix,
  value,
  required,
  touchedState,
  errorState,
  handleChange,
  handleBlur,
}) => {
  console.log(errorState);
  const [showPassword, setShowPassword] = useState(false);
  const id = label?.split(" ").join("").toLowerCase();
  return (
    <div className="text-[16px] leading-[160%] pb-[0.2rem]">
      <label className="font-[600] text-[#181336] text-[0.8rem]" htmlFor={id}>
        {label}
      </label>
      <div className="flex relative items-stretch justifystart">
        <input
          type={
            suffix && type === "password"
              ? showPassword
                ? "text"
                : type
              : type
          }
          placeholder={placeholder}
          id={id}
          value={value}
          required={required}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          className={`w-full truncate bg-[#F8FAFC] font-[400] inline-block ${
            prefix
              ? "rounded-tl-[0px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[0px]"
              : "rounded-[5px]"
          } h-[35px] py-[0px] px-[16px] border-solid  border-[1.5px] text-[#899A9A] border-[#B8C9C9] focus-visible:outline-[#3180E7]`}
        />
        {suffix && type === "password" && (
          <div className="absolute translate-y-[-50%] text-[#899A9A] top-[50%] my-auto right-[3%]">
            {showPassword ? (
              <BsEyeSlashFill
                className="block cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <BsEyeFill
                className="block cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        )}
      </div>
      <div className="text-[#F6513B] text-[10px] font-[400] leading-[160%]">
        {value && touchedState && errorState ? errorState : ""}
      </div>
    </div>
  );
};

export default Input;
