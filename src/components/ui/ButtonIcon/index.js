import { Button } from 'antd'
import { cn } from '@/utils'

const ButtonIcon = ({ icon, onClick, className, ...props }) => {
  return (
    <Button
      type="text"
      icon={icon}
      className={cn('!flex !items-center !justify-center', className)}
      onClick={onClick}
      {...props}
    />
  )
}

export default ButtonIcon
