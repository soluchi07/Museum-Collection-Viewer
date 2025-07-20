// src/components/ProductChart.jsx
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
export default function ProductChart({products, type}) {
    const [mediumfreq, setMediumFreq] = useState(null);

  // Prepare data for chart
    useEffect( () => {
        let yearCount = {};
        let freqCount = {};
        for (const item of products) {
            if (freqCount[item.medium]) {
                freqCount[item.medium]++;
            } else{
                freqCount[item.medium] = 1
            }

            if (item.year_end !== 'null' && yearCount[item.year_end]) {
                yearCount[item.year_end]++;
            } else{
                yearCount[item.year_end] = 1
            }
        };
        
        if (type == 'medium') {
            var chartData = Object.entries(freqCount).map(([medium, count]) => ({
                medium,
                count
            }));
        } else{
            var chartData = Object.entries(yearCount).map(([year, count]) => ({
                name: year,
                value: count
            }));
        }
                
        setMediumFreq(chartData);
    }, [products])

    const COLORS = ['#f9e1cdff', '#ecc5a1ff', '#e2bc75ff', '#b2945bff', '#7c6130ff'];

  return (
    <>
    {mediumfreq && type === 'medium'? (
      <div className='mediums'>
        <h3 className='mediums-heading'>MEDIUMS BAR CHART</h3>
        <ResponsiveContainer width='100%' height={450}>
          <BarChart 
            data={mediumfreq}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="10 10" />
            <XAxis dataKey="medium" label={{ value: "Medium", position: "bottom", offset: 0, style: { fill: "antiquewhite", fontWeight: "bold" }}} stroke="antiquewhite" />
            <YAxis label={{ value: "Frequency", angle: -90, position: "insideLeft", offset: -10, style: { fill: "antiquewhite", fontWeight: "bold" } }} stroke="antiquewhite"/>
            <Tooltip 
                contentStyle={{
                    backgroundColor: "#FFD700", // Tooltip background
                    color: "#1d1f1d",           // Text color
                    border: "2px solid #8B4513"
                }}
                itemStyle={{
                    color: "#8B4513",           // Item text color
                    fontWeight: "bold"
                }}
            />
            <Bar dataKey="count" fill="#eca1ac" />
          </BarChart>
        </ResponsiveContainer>
      </div>) : mediumfreq && type == 'year' ?
      (<>
        <div className='year-pie'>
            <h3 className='year-heading'>YEAR ENDS PIE CHART</h3>
            <ResponsiveContainer width='100%' height={450}>
                <PieChart>
                    <Pie
                        data={mediumfreq}
                        cx="45%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {mediumfreq.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#FFD700", // Tooltip background
                            color: "#1d1f1d",           // Text color
                            border: "2px solid #8B4513"
                        }}
                        itemStyle={{
                            color: "#8B4513",           // Item text color
                            fontWeight: "bold"
                        }}
                    />
                    <Legend layout="horizontal" align="right" horizontalAlign="middle"/>              
                </PieChart>
            </ResponsiveContainer>
        </div>
      </>) :
      <>
      </>
    }
    </>
  );
}