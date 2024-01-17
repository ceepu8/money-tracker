import React from 'react'

const Button = ({ onClick, type, children }) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      className="flex-center w-fit shrink-0 rounded border-none px-2 py-1 text-sm text-[#7e7e7e] transition-colors hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
