import { useColorModeValue } from '@chakra-ui/react'

export const PyramidSVG = ({ fields }: { fields: (number | '')[] }) => {
  const darkModeActive = useColorModeValue(false, true)

  const fieldStyle: React.CSSProperties = {
    textAlign: 'center',
    textAnchor: 'middle',
    fontSize: '7px',
    fill: darkModeActive ? '#ffffffd0' : 'black',
  }

  const strokeStyle: React.CSSProperties = {
    fill: 'none',
    stroke: darkModeActive ? '#ffffffb0' : 'black',
    strokeWidth: 0.6,
  }

  return (
    <svg width="50mm" viewBox="0 0 64.807655 44.062744" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg">
      <defs id="defs2" />
      <g id="layer1" transform="translate(-58.152301,-74.565835)">
        <text style={fieldStyle} x="72.108086" y="114.43399" id="text405">
          <tspan id="tspan403" x="72.108086" y="114.43399">
            {fields[0]}
          </tspan>
        </text>
        <text style={fieldStyle} x="91.240997" y="114.43399" id="text517">
          <tspan id="tspan515" x="91.240997" y="114.43399">
            {fields[1]}
          </tspan>
        </text>
        <text style={fieldStyle} x="110.3942" y="114.43399" id="text521">
          <tspan id="tspan519" x="110.3942" y="114.43399">
            {fields[2]}
          </tspan>
        </text>
        <text style={fieldStyle} x="81.694832" y="102.17475" id="text525">
          <tspan id="tspan523" x="81.694832" y="102.17475">
            {fields[3]}
          </tspan>
        </text>
        <text style={fieldStyle} x="100.94613" y="102.17483" id="text529">
          <tspan id="tspan527" x="100.94613" y="102.17483">
            {fields[4]}
          </tspan>
        </text>
        <text style={fieldStyle} x="91.269745" y="89.915657" id="text533">
          <tspan id="tspan531" x="91.269745" y="89.915657">
            {fields[5]}
          </tspan>
        </text>
        <g id="g851">
          <path style={strokeStyle} d="M 122.29034,118.28558 91.229152,75.14482 58.838745,118.28558 Z" id="path736" />
          <path style={strokeStyle} d="M 69.405227,104.21209 H 112.15748" id="path834" />
          <path style={strokeStyle} d="m 81.694834,104.21209 v 14.07349" id="path836" />
          <path style={strokeStyle} d="m 100.90554,104.21209 v 14.07349" id="path838" />
          <path style={strokeStyle} d="M 79.032969,91.388905 H 102.92483" id="path840" />
          <path style={strokeStyle} d="M 90.978899,91.388905 V 104.21209" id="path842" />
        </g>
      </g>
    </svg>
  )
}
