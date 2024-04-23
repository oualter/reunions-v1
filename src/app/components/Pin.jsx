'use client'
import { useContext, useRef } from 'react'
import microfictionsContext from '../contexts/microfictions.context'

const Pin = (props) => {
  const {
    coordX,
    coordY,
    Date,
    Heure,
    Texte_mf,
    GingkoBiloba,
    dateFilter,
  } = props
  // console.log('props => ', props)
  const { openModal } = useContext(microfictionsContext)
  const pinClassName = useRef(true)
  const isclassNameToRemove = pinClassName.current.className
    ? pinClassName.current.className.includes('toRemove')
    : ''
  const pinYear = Date.split('/')[2]

  let updatedClassName

  if (dateFilter && dateFilter[0] < pinYear) {
    updatedClassName = 'pin toRemove'
  } else if (
    dateFilter &&
    dateFilter[0] >= pinYear &&
    isclassNameToRemove !== false
  ) {
    updatedClassName = 'pin toDisplay'
  } else {
    updatedClassName = 'pin'
  }

  return (
    <div
      // className="pin"
      ref={pinClassName}
      className={updatedClassName}
      style={{
        width: '10px',
        height: '10px',
        top: `${coordY}%`,
        left: `${coordX}%`,
      }}
      datadate={Date}
      datahour={Heure}
      datatext={Texte_mf}
      onClick={(e, value = { GingkoBiloba }) => {
        openModal(e, value)
      }}
    ></div>
  )
}
export default Pin
