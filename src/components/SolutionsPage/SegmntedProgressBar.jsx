import React from 'react'

const SegmentedProgressBar = ({
  percent,
  segments = 80,
}) => {
  const filled = Math.round((percent / 100) * segments)
  return (
    <div className="flex gap-[5px]">
      {Array.from({ length: segments }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 h-[1.8vw] ${
            i < filled ? 'bg-primary-2' : 'bg-gray-800'
          }`}
        />
      ))}
    </div>
  )
}

export default SegmentedProgressBar