import React from "react";
import UPPCSCard from "../../atom/UPPCSCard";


const UPPCSList = () => {
  let arr=  [
  {
    "id": 1,
    "title": "UPPCS Prelims (CSAT) Open Mock-1 2025",
    "percentage": 95,
    "status": "Test Ended"
  },
  {
    "id": 2,
    "title": "UPPCS Prelims (GS) Open Mock-1 2025",
    "percentage": 78,
    "status": "Test Ended"
  }
]

  return (
    <div className="w-full max-w-7xl mx-auto  mt-6 ">
      {arr.map((test) => (
        <UPPCSCard
          key={test.id}
          title={test.title}
          percentage={test.percentage}
          status={test.status}
        />
      ))}
    </div>
  );
};

export default UPPCSList;
