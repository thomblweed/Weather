import * as React from 'react';
import { IListProps } from './IListProps';

export default class List extends React.Component<IListProps, {}> {
    
    // render a List component with the weather information
    // kept the information simple for demonstration purposes
    public render(): React.ReactElement<IListProps> {
        return (
            <div className={this.props.today ? "todayInner" : "futureInner"}>
                <div className={"timeWrapper"}>{this.props.dt_txt.slice(11,16)}</div>
                <img src={"https://openweathermap.org/img/w/" + this.props.weather[0].icon +".png"} />
                <div>{Math.ceil(this.props.main.temp * 10) / 10} °C</div>
                <div><p>{this.props.weather[0].description}</p></div>                
            </div>
        );
    }
    
}