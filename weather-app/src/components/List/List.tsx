import * as React from 'react';
import { IListProps } from './IListProps';

export default class List extends React.Component<IListProps, {}> {
    private date: Date;
    private todayDateString: string;
    private todayDateAtMidnight: Date;

    constructor(props: IListProps) {
        super(props);
        this.date = new Date(this.props.dt*1000);
        this.todayDateString = this.getTodayDateString();
        this.todayDateAtMidnight = new Date(this.todayDateString);
        let dateAtMidnight = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
        
        if(dateAtMidnight.getTime() == this.todayDateAtMidnight.getTime()) {
            console.log("Today:", this.date);
        }
        else {
            console.log("Not Today:", this.date);
        }        
    }
    
    public componentDidMount(): void {
        
    }

    public render(): React.ReactElement<IListProps> {
        return (
            <div>
               <ul>
                <li>Date: {this.date.toDateString()}</li>
                <li>Time: {this.date.toLocaleTimeString()}</li>
                <li>Temperature: {this.props.main.temp} °C</li>
                <li>Wind Speed: {this.props.wind.speed}</li>
                <li>Humidity: {this.props.main.humidity}%</li>
                <li>Rain: {this.props.rain["3h"]}</li>                
               </ul> 
            </div>         
        );
    }

    private getTodayDateString(): string {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();

        if(dd<10) {
            dd = 0+ dd
        }
        if(mm<10) {
            mm = 0+ mm
        }
        let todayString: string;
        todayString =  mm + '/' + dd + '/' + yyyy;
        return todayString;
    }
}