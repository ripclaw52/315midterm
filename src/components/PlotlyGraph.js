import React from "react";
import Plot from 'react-plotly.js';

const PlotlyGraph = ({ history, type }) => {
    let date = [];
    if (type === "high+low") {
        let low = [];
        let high = [];
        
        Object.values(history).forEach(value => {
            date.push(value.date);
            high.push(value.high);
            low.push(value.low);
        });

        return (
            <Plot
                data={[
                    { type: 'line', x: date, y: high, name: 'High', },
                    { type: 'line', x: date, y: low, name: "low", }
                ]}
                layout={ {title: "High / Low"}}
            />
        );
    
    }
    else if (type === "volume" ) {
        let volume = [];
        
        Object.values(history).forEach(value => {
            date.push(value.date);
            volume.push(value.volume);
        });
        
        return (
            <Plot
                data={[
                    { type:'line', x: date, y: volume, }
                ]}
                layout={ {title: "Volume"}}
            />
        );
    }
    else {
        return (
        <></>
        );
    }
}
export default PlotlyGraph;