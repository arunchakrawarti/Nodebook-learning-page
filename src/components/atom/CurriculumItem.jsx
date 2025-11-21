import React from 'react'

const CurriculumItem = ({ section, videos, notes }) => (
    <div className="p-4 rounded-lg bg-gray-50 mb-3">
      <span className="font-medium text-gray-800">{section}</span>
      <div className="flex space-x-10 text-sm text-gray-600 mt-2">
        <div className="flex items-center space-x-1">
          <CiYoutube className="w-4 h-4" />
          <span>{videos} Videos</span>
        </div>
        <div className="flex items-center space-x-1">
          <BiNote className="w-4 h-4" />
          <span>{notes} Notes</span>
        </div>
      </div>
    </div>
  );

export default CurriculumItem
