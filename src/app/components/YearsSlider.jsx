'use client'
import { useContext } from 'react'
import microfictionsContext from '../contexts/microfictions.context'
import { Slider } from '@nextui-org/slider'

const YearsSlider = (props) => {
  const yearsContext = useContext(microfictionsContext)
  const { defaultpins, handleDisplayPins, selectedMicrofictions } = yearsContext
  const yearsArr = []
  let yearsArrToSlider
  defaultpins.map((elt) => {
    const { Date } = elt
    // get the year value of the date
    const yearValue = Date.split('/')[2]
    // incrémente le tableau des années
    yearsArr.push(yearValue)
    // fonction qui enlève les années doublons
    function YearsArrFiltered(year) {
      return year.filter((value, index) => year.indexOf(value) === index)
    }
    // variable qui contient le bon tableau
    const yearsArray = YearsArrFiltered(yearsArr)
    yearsArrToSlider = yearsArray
  })
  const yearsDivisionCount = (yearsArrToSlider < 16) ? yearsArrToSlider.length : 10
  if (!yearsArrToSlider) return false

  const yearsArrToSliderInt = Array.from(yearsArrToSlider, (x) => parseInt(x))
  const minYear = Math.min(...yearsArrToSliderInt)
  const maxYear = Math.max(...yearsArrToSliderInt)
  const era = maxYear - minYear
  const step = Math.round(era / (yearsDivisionCount + 1))
  const maxYearSlider = minYear + (yearsDivisionCount + 1) * step + 1

  return (
    <div
      className="slider-wrapper fixed h-[75vh] w-[80px] top-[140px] z-10000"
      // suppressHydrationWarning={true}
    >
      <Slider
        size="sm"
        step={step}
        color="foreground"
        label="Années"
        showSteps={true}
        maxValue={maxYearSlider + 2}
        minValue={minYear}
        defaultValue={maxYearSlider + 2}
        orientation="vertical"
        onChange={(event, value) => {
          handleDisplayPins(event, (value = { selectedMicrofictions }))
        }}
        onChangeCommitted={(event, value) => {
          handleDisplayPins(event, (value = { selectedMicrofictions }))
        }}
      />
    </div>
  )
}
export default YearsSlider
