import { Heading } from '@chakra-ui/layout'
import React from 'react'
import { Pie, PieChart, ResponsiveContainer } from "recharts"

const Chart1 = () => {
    const data = [
        {name: "Banana", value: 1000},
        {name: "Burger", value: 5000},
        {name: "Samosa", value: 3000},
        {name: "Chicken", value: 1000},
    ]

  return (
    <div>
        <Heading>Top Searches</Heading>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart1