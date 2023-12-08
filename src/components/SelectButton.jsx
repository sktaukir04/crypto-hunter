import React from 'react'

const SelectButton = ({children,selected,onClick}) => {
    const color = selected?"gold":'';
    const fontWeight = selected?700:500;
  return (
    <span className='customButton' style={{color:{color},fontWeight:{fontWeight}}} onClick={onClick}>{children}</span>
  )
}

export default SelectButton