const Button = ({ children, variant = "primary", className = "" }) => {
  const baseStyle =
    "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#10B981] text-white hover:bg-[#059669]",
    outline: "border border-white/20 text-white hover:bg-white/10",
    dark: "bg-[#051814] text-white hover:bg-[#0a2c24]",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
export default Button;
