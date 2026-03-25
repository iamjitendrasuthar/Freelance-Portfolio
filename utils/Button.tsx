const Button = ({ children, variant = "primary", className = "" }) => {
  const baseStyle =
    "px-7 py-2.5 rounded-full text-[18px] font-medium font-satoshi transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#50C878] text-[#0A0A0A] hover:bg-[#5cf28e]",
    outline: " text-[#FAFAFA] bg-white/12 backdrop-blur-md hover:bg-white/20",
    dark: "bg-[#051814] text-white hover:bg-[#0a2c24]",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
};
export default Button;
