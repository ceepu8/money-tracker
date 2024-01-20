import NextLink from 'next/link'

const Link = ({ disabled, children, ...props }) => {
  if (disabled) {
    return children
  }

  return <NextLink {...props}>{children}</NextLink>
}

export default Link
