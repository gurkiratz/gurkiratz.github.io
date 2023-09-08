import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="lg:pl-[136px] flex flex-col gap-3 text-lg mt-12">
      <div className="max-w-[40rem]">{children}</div>
    </div>
  )
}

export default Container
