export const Button = ({ children, href, variant = 'primary' }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-colors duration-200"
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-gray-800 border-2 border-gray-800 hover:bg-gray-50"
  }

  return (
    <a 
      href={href} 
      className={`${baseStyles} ${variants[variant]}`}
      style={{ textDecoration: 'none' }}
    >
      {children}
    </a>
  )
}
