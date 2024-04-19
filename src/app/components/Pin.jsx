'use client'
import { useContext } from 'react'
import microfictionsContext from '../contexts/microfictions.context'

const Pin = (props) => {
  const { coordX, coordY, Date, Heure, Texte_mf, GingkoBiloba, category } = props
  const { openModal } = useContext(microfictionsContext)
  let updatedClassName;
  if (category === 'toRemove'){
    updatedClassName = "pin toRemove"
  } else if (category === 'toDisplay') {
    updatedClassName = 'pin toDisplay'
  } else {
    updatedClassName = "pin"
  }
    return (
      <div
        // className="pin"
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
