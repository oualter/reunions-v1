'use client'
import { useContext, useRef } from 'react'
import microfictionsContext from '../contexts/microfictions.context'
import Pin from './Pin'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const PinsList = (props) => {
  const { pins } = useContext(microfictionsContext)
  const zeroOneArray1 = Math.round(Math.random())
  const zeroOneArray2 = Math.round(Math.random())
  const rangeX = Math.random() * 15
  const rangeY = Math.random() * 15
  let randomX = zeroOneArray1 === 0 ? rangeX : -rangeX
  let randomY = zeroOneArray2 === 0 ? -rangeY : rangeY

  const pindReducedDate = pins.reduce((acc, curr)=>{
    if(!acc[curr.Date]){
      acc[curr.Date] = []
    }
    acc[curr.Date].push(curr.Texte_microfiction)
    if(acc[curr.Date].length > 0){
      acc[curr.Date].push(['<hr/>'])
    }
    return acc
  },{})

  const animContainer = useRef()
  useGSAP(
    () => {
      gsap.from('.pin', {
        x: randomX,
        y: randomY,
        scale: 3,
        opacity: 0,
        duration: 2.5,
        ease: 'expo',
        delay: 0.5,
        stagger: {
          each: 0.08,
        },
      })
    },
    { scope: animContainer }
  )

  return (
    <div ref={animContainer}>
      {pins.map((elt) => {
        const {id, pingenerator, Date } = elt
        if (pindReducedDate[Date]) {
          if(!pingenerator) return;
          let Texte_mf = pindReducedDate[Date]
          Texte_mf.pop()
          Texte_mf = Texte_mf.join('')
          const posX = pingenerator ? pingenerator.split(',')[0] : ''
          const posY = pingenerator ? pingenerator.split(',')[1] : ''
          return (
            <Pin
              key={posX * posX *id}
              coordX={posX}
              coordY={posY}
              Texte_mf={Texte_mf}
              {...elt}
            />
          )
        }
      })}
    </div>
  )
}
export default PinsList
