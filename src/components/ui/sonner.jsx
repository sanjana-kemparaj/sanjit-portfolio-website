import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    (<Sonner
      theme={theme}
      className="toaster group"
      style={
        {
      background: 'red', // Very visible background
      color: 'white',    // Visible text
      border: '1px solid red',
        }
      }
      {...props} />)
  );
}

export { Toaster }
