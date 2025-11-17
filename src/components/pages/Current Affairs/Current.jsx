import React from 'react'
import Banner from './Banner'
import DayCardList from './DayCardList'
import CurrentButton from './CurrentButton'

const Current = () => {
  return (
    <div>
      <Banner/>
      <CurrentButton/>
      <DayCardList/>
    </div>
  )
}

export default Current
