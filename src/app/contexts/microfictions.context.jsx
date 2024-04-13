'use client'
import { createContext, useState } from 'react'

const MicrofictionsContext = createContext(null)

export default MicrofictionsContext

const MicrofictionsContextProvider = (props) => {
  // console.log('props =>! ', props.children[0])
  let [isOpen, setIsOpen] = useState(false)
  let [modalAttr, setModalAttr] = useState('')
  let [GingkoBiloba, setGingkoBiloba] = useState(false)
  let [isShowConfettis, setIsShowConfettis] = useState(false)
  let [initConfettis, setInitConfettis] = useState(false)
  const [selectedMicrofictions, setSelectedMicrofictions] = useState([])
  const mfArray = props.value.microfictionsFiltered
    ? props.value.microfictionsFiltered
    : props.value.microfictions

  const openModal = (e, value) => {
    setModalAttr(e.target.attributes)
    setIsOpen(true)
    const tempConfetti = value.GingkoBiloba
    setIsShowConfettis(tempConfetti)
  }
  const closeModal = () => {
    setIsOpen(false)
    setIsShowConfettis(false)
  }

  // filtre les épingles inférieures aux dates sélectionnées
  const handleDisplayPins = (event, value) => {
    const filteredMF = mfArray.filter((elt) => {
      let eltDate = parseInt(elt.Date.split('/')[2])
      return eltDate < parseInt(event) + 1
    })
    setSelectedMicrofictions(filteredMF)
  }

  return (
    <MicrofictionsContext.Provider
      value={{
        pins:
          selectedMicrofictions.length > 0 ? selectedMicrofictions : mfArray,
        defaultpins: mfArray,
        openModal,
        closeModal,
        isOpen,
        modalAttr,
        GingkoBiloba,
        isShowConfettis,
        initConfettis,
        setInitConfettis,
        handleDisplayPins,
        selectedMicrofictions: mfArray,
      }}
    >
      <>{props.children}</>
    </MicrofictionsContext.Provider>
  )
}

export { MicrofictionsContextProvider }
