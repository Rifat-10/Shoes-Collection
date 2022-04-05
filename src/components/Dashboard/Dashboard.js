import { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [chartdata, setChartdata] = useState([]);

    useEffect(() => {
        fetch('chartdata.json')
            .then(res => res.json())
            .then(data => setChartdata(data));
    }, [])

    return (<div className=' d-flex flex-column justify-content-center align-items-center review h-100'>
        <br /> <br />
        <div className="row g-5">

        <div >

        
        <LineChart width={530} height={250} data={chartdata}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="sell" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            
        </LineChart>


        <AreaChart width={530} height={250} data={chartdata}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>

        </div>
        </div>
        <BarChart
            width={500} height={300} data={chartdata}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>


        <PieChart width={500} height={400}>
            <Pie data={chartdata} dataKey="investment" nameKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
            <Pie data={chartdata} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>


    </div>
    )
};



export default Dashboard;


