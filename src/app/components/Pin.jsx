'use client'
import { useContext } from 'react'
import microfictionsContext from '../contexts/microfictions.context'


const Pin = (props) => {
  const {
    coordX,
    coordY,
    Date,
    Heure,
    Texte_mf,
    GingkoBiloba,
  } = props
  const { openModal } = useContext(microfictionsContext)

  return (
    <div
      className="pin"
      style={{
        width: '10px',
        height: '10px',
        top: `${coordY}%`,
        left: `${coordX}%`,
      }}
      datadate={Date}
      datahour={Heure}
      // datatext={Texte_microfiction}
      datatext={Texte_mf}
      onClick={(e, value = { GingkoBiloba }) => {
        openModal(e, value)
      }}
    ></div>
  )
}
export default Pin
