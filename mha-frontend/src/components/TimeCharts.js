import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis,YAxis,Tooltip,Legend} from 'recharts';

//TODO: Make changes to fetch data through API
const data = 
[
    {
        "data": {
            "_id": "",
            "acousticness": 0.17,
            "danceability": 0.63,
            "date": "2003-11-16",
            "duration_ms": 236160.73,
            "energy": 0.7,
            "instrumentalness": 0.03,
            "key": 4,
            "liveness": 0.18,
            "loudness": -6.68,
            "mode": 1,
            "speechiness": 0.11,
            "tempo": 117.19,
            "time_signature": 4,
            "valence": 0.56
            },
        "week_number": 1
    },
    {
        "data": {
            "_id": "",
            "acousticness": 0.17,
            "danceability": 0.63,
            "date": "2003-11-23",
            "duration_ms": 233484.26,
            "energy": 0.7,
            "instrumentalness": 0.04,
            "key": 4,
            "liveness": 0.18,
            "loudness": -6.67,
            "mode": 0,
            "speechiness": 0.11,
            "tempo": 114.96,
            "time_signature": 4,
            "valence": 0.55
        },
        "week_number": 2
    },
    {
        "data": {
        "_id": "",
        "acousticness": 0.18,
        "danceability": 0.64,
        "date": "2003-11-30",
        "duration_ms": 234613.32,
        "energy": 0.7,
        "instrumentalness": 0.04,
        "key": 4,
        "liveness": 0.19,
        "loudness": -6.66,
        "mode": 1,
        "speechiness": 0.12,
        "tempo": 113.86,
        "time_signature": 4,
        "valence": 0.55
    },
    "week_number": 3
    },
    {
        "data": {
            "_id": "",
            "acousticness": 0.17,
            "danceability": 0.64,
            "date": "2003-12-14",
            "duration_ms": 232871.69,
            "energy": 0.71,
            "instrumentalness": 0.03,
            "key": 4,
            "liveness": 0.2,
            "loudness": -6.49,
            "mode": 1,
            "speechiness": 0.1,
            "tempo": 111.78,
            "time_signature": 4,
            "valence": 0.57
        },
        "week_number": 4
    }
]

class TimeCharts extends React.Component {
  render() {
    const { category } = this.props;

    return (
      <div style={{flex: 1,padding: 50}}>
        <BarChart width={1100} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week_number" stroke = "#ffffff" strokeWidth={3} label={{value:"Weeks", fill:"white", style: { fontWeight: 'bold' } }}/>
            <YAxis stroke = "#ffffff" strokeWidth={3}/>
            <Tooltip />
            <Legend wrapperStyle={{right: -30}} layout="vertical" verticalAlign="top" align="right"/>
            
            <Bar type="monotone" dataKey={'data.'+category.key.toLowerCase()} strokeWidth={3}  stroke={category.color} fill={category.fill} />
            
        </BarChart>
            {/* <button class="dropbtn" onClick={openDropDown}>Unit</button> */}
        </div>
    );
  }
}

export default TimeCharts;