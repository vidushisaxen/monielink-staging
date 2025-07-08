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
  const fillColor = index < progress ? activeColor : inactiveColor

  return (
    <div
      className="label flex items-center gap-2"
      key={idx}
      style={{
        '--angle': `${angle}deg`,
        '--radius': `${radius + length + labelOffset}px`,
      }}
    >
      <div className='h-[1vw] w-[1vw]'>
        <svg className='h-full w-full' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.35675 3.27732L5.46209 1.12888C5.5522 1.03692 5.67553 0.985107 5.80427 0.985107L18.5783 0.985109C18.8429 0.985109 19.0573 1.1996 19.0573 1.46419V11.6511C19.0573 11.7775 19.0074 11.8988 18.9184 11.9886L16.5307 14.3949L14.0613 16.8741C13.9714 16.9644 13.8492 17.0151 13.7218 17.0151H1.09052C0.825927 17.0151 0.611434 16.8006 0.611432 16.536L0.61133 6.33974C0.611329 6.21636 0.658927 6.09774 0.74421 6.00858L3.35675 3.27732Z"
            fill={fillColor}
          />
        </svg>
      </div>
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
