import React from 'react'
import AskCard from '../../atom/AskCard'

const Carddata = () => {
  let arr = [
    {
      img: "/img/Icon.png",
      title: "Doubts Resolved",
      description: "10000+"
    },
    {
      img: "/img/Icon1.png",
      title: "Response Time",
      description: "<24 hrs"
    },
    {
      img: "/img/Icon2.png",
      title: "Satisfaction Rate",
      description: "98%"
    },
  ]

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-4 py-10">
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 
        md:gap-10
        place-items-center
      ">
        {arr.map((item, i) => (
          <AskCard
            key={i}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Carddata
