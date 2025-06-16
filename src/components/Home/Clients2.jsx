"use client";
import React from "react";

export default function AnimatedClients() {
  return (
    <div className="w-full h-full">
      <svg
        viewBox="0 0 1920 1296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Fixed size gradients for the moving strokes */}
          <linearGradient
            id="movingGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#282828" stopOpacity="0.5" />
            <stop offset="30%" stopColor="#FE6E00" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#FE6E00" stopOpacity="1" />
            <stop offset="100%" stopColor="#282828" stopOpacity="0.5" />
          </linearGradient>

          <clipPath id="clip0_252_22056">
            <rect
              width="1920"
              height="1296"
              fill="white"
              transform="matrix(-1 0 0 -1 1920 1296)"
            />
          </clipPath>
        </defs>

        <g clipPath="url(#clip0_252_22056)">
          {/* Gray base paths */}
          <path
            d="M1919.5 25.0547L1814.11 25.0547C1469.58 25.0547 1190.28 304.35 1190.28 648.878V648.878"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 1272.98H1814.37C1469.7 1272.98 1190.28 993.565 1190.28 648.891V648.891"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 114.252H1724.94C1429.66 114.252 1190.28 353.624 1190.28 648.904V648.904"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 1183.79H1725.14C1429.75 1183.79 1190.28 944.324 1190.28 648.93V648.93"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 211.347L1627.83 211.346C1386.18 211.346 1190.28 407.242 1190.28 648.892V648.892"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 1086.69H1628.09C1386.3 1086.69 1190.28 890.672 1190.28 648.877V648.877"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 300.941L1538.22 300.942C1346.06 300.942 1190.28 456.717 1190.28 648.876V648.876"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 997.031H1538.42C1346.15 997.031 1190.28 841.167 1190.28 648.898V648.898"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 907.402H1448.71C1305.98 907.402 1190.28 791.703 1190.28 648.98V648.98"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 390.57L1448.61 390.571C1305.94 390.571 1190.28 506.228 1190.28 648.897V648.897"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1920 472.729L1366.38 472.729C1269.12 472.729 1190.28 551.568 1190.28 648.82V648.82"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 825.243H1366.56C1269.2 825.243 1190.28 746.323 1190.28 648.971V648.971"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 557.686L1281.49 557.686C1231.12 557.686 1190.28 598.52 1190.28 648.892V648.892"
            stroke="#282828"
            strokeWidth="1"
          />

          <path
            d="M1919.5 739.798H1281.1C1230.94 739.798 1190.28 699.14 1190.28 648.986V648.986"
            stroke="#282828"
            strokeWidth="1"
          />

          <line
            x1="-12.8145"
            y1="648.871"
            x2="2159.68"
            y2="648.871"
            stroke="#282828"
            strokeWidth="1"
          />

          {/* Animated orange strokes using the original gradient */}
          <path
            d="M1919.5 25.0547L1814.11 25.0547C1469.58 25.0547 1190.28 304.35 1190.28 648.878V648.878"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 1272.98H1814.37C1469.7 1272.98 1190.28 993.565 1190.28 648.891V648.891"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="3.2s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 114.25H1724.94C1429.66 114.25 1190.28 353.622 1190.28 648.902V648.902"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 1183.79H1725.14C1429.75 1183.79 1190.28 944.322 1190.28 648.928V648.928"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 211.347L1627.83 211.346C1386.18 211.346 1190.28 407.242 1190.28 648.892V648.892"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 1086.69H1628.09C1386.3 1086.69 1190.28 890.672 1190.28 648.877V648.877"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 300.941L1538.22 300.942C1346.06 300.942 1190.28 456.717 1190.28 648.876V648.876"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="3.7s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 997.029H1538.42C1346.15 997.029 1190.28 841.165 1190.28 648.896V648.896"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="2.3s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 907.402H1448.71C1305.98 907.402 1190.28 791.703 1190.28 648.98V648.98"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="4.2s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 390.57L1448.61 390.571C1305.94 390.571 1190.28 506.228 1190.28 648.897V648.897"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="3.3s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1920 472.729L1366.38 472.729C1269.12 472.729 1190.28 551.568 1190.28 648.82V648.82"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="2.7s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 825.243H1366.56C1269.2 825.243 1190.28 746.323 1190.28 648.971V648.971"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="3.9s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 557.686L1281.49 557.686C1231.12 557.686 1190.28 598.52 1190.28 648.892V648.892"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="2.9s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M1919.5 739.798H1281.1C1230.94 739.798 1190.28 699.14 1190.28 648.986V648.986"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 800"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="-900;0;900"
              dur="3.6s"
              repeatCount="indefinite"
            />
          </path>

          <line
            x1="-100"
            y1="648.871"
            x2="2020"
            y2="648.871"
            stroke="url(#movingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100 200"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="300;0;-300"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
        </g>
      </svg>
    </div>
  );
}
