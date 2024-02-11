import { Popover as AntdPopover } from 'antd'
import isEmpty from 'lodash/isEmpty'
import { cn } from '@/utils'

const Popover = ({
  children,
  trigger = 'click',
  placement = 'bottom',
  title,
  arrowPointAtCenter,
  pointAtCenter,
  className,
  rootClassName,
  arrow = {},
  open,
  onOpenChange,
  style,
  content,
  ...props
}) => {
  const _arrow = !isEmpty(arrow) && {
    ...arrow,
    pointAtCenter: true,
  }

  //   const [open, setOpen] = useState(false);
  //   const ref = useRef<HTMLDivElement>(null);
  //   const [align, setAlign] = useState<"start" | "end">("start");

  //   useEffect(() => {
  //     const handleResize = () => {
  //       const halfWidth = window.innerWidth / 2;
  //       const { x } = ref?.current?.getBoundingClientRect() ?? {
  //         x: 0,
  //         y: 0,
  //       };
  //       if (x > halfWidth) {
  //         setAlign("end");
  //       } else {
  //         setAlign("start");
  //       }
  //     };
  //     handleResize();
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, [setAlign]);

  return (
    <AntdPopover
      open={open}
      onOpenChange={onOpenChange}
      trigger={trigger}
      placement={placement}
      title={title}
      arrow={_arrow}
      autoAdjustOverflow="true"
      style={style}
      rootClassName={cn('rounded-[8px] border border-[#ededed]', rootClassName)}
      className={className}
      content={content}
      {...props}
    >
      {children}
    </AntdPopover>
  )
}

export default Popover
