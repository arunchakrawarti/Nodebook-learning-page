import React from 'react'

const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center space-x-2 text-sm text-gray-700">
      <Icon className="w-6 h-6 text-[#002E62]" />
      <span className="font-poppins font-medium text-[13.2px] leading-[16.8px] tracking-[0px]">
        <strong>{label}:</strong> {value}
      </span>
    </div>
  );
export default InfoItem
