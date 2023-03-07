import { useColorModeValue } from '@chakra-ui/react'

export const ThereAndBackSVG = ({ fields, type }: { fields: (number | null)[]; type: 'add' | 'mul' }) => {
  const darkModeActive = useColorModeValue(false, true)

  const fieldStyle: React.CSSProperties = {
    textAlign: 'center',
    textAnchor: 'middle',
    fontSize: '6px',
    fill: darkModeActive ? '#ffffffd0' : 'black',
  }

  const strokeStyle: React.CSSProperties = {
    fill: 'none',
    stroke: darkModeActive ? '#ffffffb0' : 'black',
    strokeWidth: 0.6,
  }

  const markerStyle: React.CSSProperties = {
    fill: darkModeActive ? '#ffffffb0' : 'black',
    fillRule: 'evenodd',
    strokeWidth: 0.6,
  }

  const withMarker: React.CSSProperties = {
    markerEnd: 'url(#TriangleStart)',
  }

  const signs = type === 'add' ? ['+', '-'] : ['⋅', '÷']

  return (
    <svg
      width="33.221mm"
      height="31.018mm"
      version="1.1"
      viewBox="0 0 33.221 31.018"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="TriangleStart"
          orient="auto-start-reverse"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 5.3244081 6.1553851"
          style={{ overflow: 'visible' }}
        >
          <path transform="scale(.7)" d="m5.77 0-8.65 5v-10z" style={markerStyle} />
        </marker>
      </defs>
      <g transform="translate(-.13173 8.0089)">
        <rect x=".43174" y="4.4755" width="9.7982" height="6.049" style={strokeStyle} />
        <rect x="23.254" y="4.4755" width="9.7982" height="6.049" style={strokeStyle} />
        <g transform="translate(2.8387e-7 -.33674)">
          <path
            d="m11.581 3.5956s2.2155-1.4912 4.8146-1.4912 4.8146 1.4912 4.8146 1.4912"
            style={{ ...strokeStyle, ...withMarker }}
          />
          <path
            d="m21.904 12.078s-2.2155 1.4912-4.8146 1.4912-4.8146-1.4912-4.8146-1.4912"
            style={{ ...strokeStyle, ...withMarker }}
          />
        </g>
        <text x="5.1961765" y="9.6166544" style={fieldStyle}>
          <tspan x="5.1961765" y="9.6166544">
            {fields[0] ?? ''}
          </tspan>
        </text>
        <text x="28.315733" y="9.6166544" style={fieldStyle}>
          <tspan x="28.315733" y="9.6166544">
            {fields[2] ?? ''}
          </tspan>
        </text>
        <text x="16.743206" y="-1.7034016" style={fieldStyle}>
          <tspan x="16.743206" y="-1.7034016">
            {`${signs[0]} ${fields[1] ?? '__'}`}
          </tspan>
        </text>
        <text x="16.743206" y="20.936731" style={fieldStyle}>
          <tspan x="16.743206" y="20.936731">
            {`${signs[1]} ${fields[1] ?? '__'}`}
          </tspan>
        </text>
      </g>
    </svg>
  )
}
