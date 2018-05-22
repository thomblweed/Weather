import * as React from 'react';
import { IDayProps } from './IDayProps';
import List from '../List/List';
import '../../helpers/weather.css';

export default class Day extends React.Component<IDayProps> {
    // variables required for showing UK days and dates
    private date: Date;
    private todayDateString: string;
    private todayDate: Date;
    private today: boolean;
    private weekDay: string;
    private numericDay: string;
    private month: string;
    private year: string;
    
    constructor(props: IDayProps) {
        super(props);
        // set values to the local variables
        this.processDateAndDayVariables();
    }
    
    public render(): React.ReactElement<IDayProps> {
        return (
            <div className={this.today ? "todayOuter" : "futureOuter"}>
                <div className={this.today ? "dateWrapperToday" : "dateWrapperFuture"}>
                    {this.today && <h3>Today</h3>}
                    {this.today && <h4>{this.weekDay} {this.numericDay} {this.month} {this.year}</h4>}
                    {!this.today && <h4>{this.weekDay}</h4>}
                    {!this.today && <p>{this.numericDay} {this.month} {this.year}</p>}
                </div>
                <div className={this.today ? "listWrapperToday" : "listWrapperFuture"}>
                    {this.createListComponents()}
                </div>
            </div>
        );
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
                 today={this.today}
                />
            );
        });
    }

    private processDateAndDayVariables(): void {
        
        // set 'friendly' date formatting names to the local variables
        this.date = new Date(this.props.date);
        this.weekDay = this.date.toLocaleString("en-uk", { weekday: "long" });
        this.numericDay = this.date.toLocaleString("en-uk", { day: "2-digit" });
        this.month = this.date.toLocaleString("en-uk", { month: "long" });
        this.year = this.date.toLocaleString("en-uk", { year: "numeric" });
        
        // get today's date in string format
        this.todayDateString = this.getTodayDateString();
        // get today's date at midnight
        this.todayDate = new Date(this.todayDateString);        

        // get today's date and component date with same midnight time for comparison
        let todayDateTime = this.todayDate.getTime();
        let dateTime = this.date.getTime();
        // compare the dates with the same time (midnight) to flag if it is 'today'   
        if(todayDateTime == dateTime) {
            this.today = true;            
        }
        else {
            this.today = false;            
        }  
    }

    private getTodayDateString(): string {
        // get Date for 'today'
        let today = new Date();
        // get numeric values for Day/Month/Year
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        // declare string variables for Day and Month
        let stringDD: string;
        let stringMM: string;

        // if numeric day is less than 10 we need to append a string '0' 
        if(dd < 10) {
            stringDD = "0" + dd;
        }
        else {
            stringDD = dd.toString();
        }

        // if numeric month is less than 10 we need to append a string '0' 
        if(mm < 10) {
            stringMM = "0" + mm;
        }
        else {
            stringMM = mm.toString();
        }
        
        // build today's string date in UK format
        let todayString: string;
        todayString =  yyyy + '-' + stringMM + '-' + stringDD;

        return todayString;
    }
}