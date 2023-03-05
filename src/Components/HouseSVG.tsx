import { useColorModeValue } from '@chakra-ui/react'

export const HouseSVG = ({ fields }: { fields: number[] }) => {
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
    <svg width="30.6mm" height="40.697mm" version="1.1" viewBox="0 0 30.6 40.697" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(.3 .39699)">
        <g style={strokeStyle}>
          <path d="m30 40v-27l-15-13-15 13v27z" />
          <path d="m0 13h30" />
          <path d="m15 13v27" />
          <path d="m0 22h30" />
          <path d="m0 31h30" />
        </g>
        <g style={fieldStyle}>
          <text x="14.7" y="10.173126" text-align="center">
            <tspan x="14.7" y="10.173126" fill="#000000" />
          </text>
          <text x="15" y="10.185493" text-align="center">
            <tspan x="15" y="10.185493">
              {fields[0]}
            </tspan>
          </text>
          <text x="7.6929784" y="37.587727" text-align="center">
            <tspan x="7.6929784" y="37.587727">
              {fields[1]}
            </tspan>
          </text>
          <text x="7.5110774" y="28.645603" text-align="center">
            <tspan x="7.5110774" y="28.645603">
              {fields[2]}
            </tspan>
          </text>
          <text x="7.5089998" y="19.616665" text-align="center">
            <tspan x="7.5089998" y="19.616665">
              {fields[3]}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  )
}
