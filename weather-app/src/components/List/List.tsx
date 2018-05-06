import * as React from 'react';
import { IListProps } from './IListProps';

export default class List extends React.Component<IListProps, {}> {
    
    // private date: Date;
    
    constructor(props: IListProps) {
        super(props);
        
        /*this.date = new Date(this.props.dt*1000);
        let hour = this.date.toLocaleString("en-uk",{ hour: "numeric" });
        let minute = this.date.toLocaleString("en-uk",{ minute: "numeric" });
        console.log(hour + " " + minute);
        console.log(this.props.dt_txt.slice(11,16));
        debugger;*/
    }
    
    public render(): React.ReactElement<IListProps> {
        return (
            <div className={this.props.today ? "todayInner" : "futureInner"}>
                <div className={"timeWrapper"}>{this.props.dt_txt.slice(11,16)}</div>
                <img src={"http://openweathermap.org/img/w/" + this.props.weather[0].icon +".png"} />
                <div>{Math.ceil(this.props.main.temp * 10) / 10} °C</div>
                <div><p>{this.props.weather[0].description}</p></div>                
            </div>
        );
    }
    
}