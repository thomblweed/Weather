import * as React from 'react';
import { IListProps } from './IListProps';

export default class List extends React.Component<IListProps, {}> {
    private date: Date;
    constructor(props: IListProps) {
        super(props);
        this.date = new Date(this.props.dt*1000);
    }
    
    public componentDidMount(): void {
               
    }

    public render(): React.ReactElement<IListProps> {
        return (
            <div>
               <ul>
                <li>Date: {this.date.toDateString()}</li>
                <li>Time: {this.date.toLocaleTimeString()}</li>
                <li>Temperature: {this.props.main.temp}</li>
                <li>Wind Speed: {this.props.wind.speed}</li>
                <li>Humidity: {this.props.main.humidity}%</li>
                <li>Rain: {this.props.rain["3h"]}</li>                
               </ul> 
            </div>         
        );
    }

    
}