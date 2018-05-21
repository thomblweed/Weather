import * as React from 'react';
import { IDayProps, IDayState } from './IDayProps';
import List from '../List/List';
import '../../helpers/weather.css';

export default class Day extends React.Component<IDayProps, IDayState> {
    
    constructor(props: IDayProps) {
        super(props);        
        
        this.state = {
            today: null,
            weekDay: null,
            numericDay: null,
            month: null,
            year: null
          }        
    }

    public componentDidMount(): void {
        // set values to the local variables
        this.processDateAndDayState();
    }    
    
    public render(): React.ReactElement<IDayProps> {
        
        if(this.state && this.state.today != null) {
            return (
                <div className={this.state.today ? "todayOuter" : "futureOuter"}>
                    <div className={this.state.today ? "dateWrapperToday" : "dateWrapperFuture"}>
                        {this.state.today && <h3>Today</h3>}
                        {this.state.today && <h4>{this.state.weekDay} {this.state.numericDay} {this.state.month} {this.state.year}</h4>}
                        {!this.state.today && <h4>{this.state.weekDay}</h4>}
                        {!this.state.today && <p>{this.state.numericDay} {this.state.month} {this.state.year}</p>}
                    </div>
                    <div className={this.state.today ? "listWrapperToday" : "listWrapperFuture"}>
                        {this.createListComponents()}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div />
            );
        }
    }

    // render a List component for each value past through in the array list property
    private createListComponents(): Object {
        return Object
         .keys(this.props.list)
          .map(key => {
            return (
                <List 
                 key={key}
                 dt={this.props.list[key].dt}
                 main={this.props.list[key].main}
                 weather={this.props.list[key].weather}
                 clouds={this.props.list[key].clouds} 
                 wind={this.props.list[key].wind}
                 rain={this.props.list[key].rain}
                 snow={this.props.list[key].snow}
                 sys={this.props.list[key].sys}
                 dt_txt={this.props.list[key].dt_txt}
                 today={this.state.today}
                />
            );
        });
    }

    private processDateAndDayState(): void {     
        // set 'friendly' date formatting names to the state
        const date: Date = new Date(this.props.date);
        const weekDay: string = date.toLocaleString("en-uk", { weekday: "long" });
        const numericDay: string = date.toLocaleString("en-uk", { day: "2-digit" });
        const month: string = date.toLocaleString("en-uk", { month: "long" });
        const year: string = date.toLocaleString("en-uk", { year: "numeric" });
        
        // get today's date in string format
        const todayDateString: string = this.getTodayDateString();
        // get today's date at midnight
        const todayDate: Date = new Date(todayDateString);        

        // get today's date and component date with same midnight time for comparison
        const todayDateTime = todayDate.getTime();
        const dateTime = date.getTime();
        // compare the dates with the same time (midnight) to flag if it is 'today'   
        if(todayDateTime == dateTime) {
            this.setState({  
                today: true,
                weekDay: weekDay,
                numericDay: numericDay,
                month: month,
                year: year
            });
        }
        else {
            this.setState({  
                today: false,
                weekDay: weekDay,
                numericDay: numericDay,
                month: month,
                year: year
            });      
        }  
    }

    private getTodayDateString(): string {
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth()+1; //January is 0!
        const yyyy = today.getFullYear();
        let stringDD: string;
        let stringMM: string;

        if(dd < 10) {
            stringDD = "0" + dd;
        }
        else {
            stringDD = dd.toString();
        }

        if(mm < 10) {
            stringMM = "0" + mm;
        }
        else {
            stringMM = mm.toString();
        }
        
        let todayString: string;
        todayString =  yyyy + '-' + stringMM + '-' + stringDD;

        return todayString;
    }
}