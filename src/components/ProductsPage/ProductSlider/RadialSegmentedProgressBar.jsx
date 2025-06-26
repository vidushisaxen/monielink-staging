import React from 'react'

export default function RadialSegmentedProgressBar({
  segments = 100,
  progress,
  size,
  thickness = 8,
  length = 20,
  activeColor = '#fe6e00',
  inactiveColor = '#E9E6E4',
  labels = [],
  labelOffset = 40,
  startAngle = 0,
  endAngle = 180,
}) {

  const radius = size / 2 - length
  const arc = endAngle - startAngle
  const step = arc / (segments - 1)

  return (
    <div className='relative size-[60vh]'>
      {Array.from({ length: segments }).map((_, i) => {
        const angle = startAngle + step * i
        const color = i < progress ? activeColor : inactiveColor

        return (
          <div
            key={i}
            className="tick duration-300 h-[1.8vw]"
            style={{
              '--angle': `${angle}deg`,
              '--radius': `${radius}px`,
              '--thick': `${thickness}px`,
              '--length': `${length}px`,
              backgroundColor: color,
            }}
          />
        )
      })}

      {labels.map(({ text, index }, idx) => {
        const angle = startAngle + step * index
        return (
          <div
            key={idx}
            className="label"
            style={{
              '--angle': `${angle}deg`,
              '--radius': `${radius + length + labelOffset}px`,
            }}
          >
            {text}
          </div>
        )
      })}

      <style jsx>{`
        .tick {
          position: absolute;
          top: 50%;
          left: 50%;
          width: var(--thick);
          transform-origin: 50% 100%;
          transform:
            rotate(var(--angle))
            translateY(calc(-1 * var(--radius)));
          border-radius: 2px;
        }
        .label {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: 50% 100%;
          transform:
            rotate(var(--angle))
            translateY(calc(-1 * var(--radius)))
            rotate(calc(-1 * var(--angle)));
          white-space: nowrap;
          font-size: var(--text-content-20);
          color: var(--black-1);
        }
      `}</style>
    </div>
  )
}
