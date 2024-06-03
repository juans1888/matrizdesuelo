import * as d3 from 'd3'

import { useEffect, useRef } from 'react'

const data = [1, 2]

function Piles() {
  const chartRef = useRef(null)

  useEffect(() => {
    var svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', 300)
      .attr('height', 200)

    svg
      .append('rect')
      .attr('x', 10)
      .attr('y', 120)
      .attr('width', 200)
      .attr('height', 40)
      .attr('stroke', 'black')
      .attr('fill', '#69a3b2')

    return () => {
      svg.remove()
    }
  }, [data])

  return <div ref={chartRef}></div>
}

export default Piles
