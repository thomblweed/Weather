import * as React from 'react';
import { IDayProps } from './IDayProps';
import List from '../List/List';

export default class Day extends React.Component<IDayProps> {

    private date: Date;
    private todayDateString: string;
    private todayDate: Date;
    private today: boolean;
    
    constructor(props: IDayProps) {
        super(props);
        
        this.checkToday();      
    }
    
    public render(): React.ReactElement<IDayProps> {
        return (
            <div>
                {this.today && <h3>Today</h3>}
                <h4>{this.props.date}</h4>
                {this.createListComponents()}
            </div>         
        );
    }

    // create a List component for each value past through in the list property
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
                />
            );
        });
    }

    private checkToday(): void {
        this.date = new Date(this.props.date);
        this.todayDateString = this.getTodayDateString();
        this.todayDate = new Date(this.todayDateString);
        
        let todayDateTime = this.todayDate.getTime();
        let dateTime = this.date.getTime();
        
        if(todayDateTime == dateTime) {
            this.today = true;            
        }
        else {
            this.today = false;            
        }  
    }

    private getTodayDateString(): string {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        let stringDD: string;
        let stringMM: string;

        if(dd < 10) {
            stringDD = "0" + dd;
        }
        if(mm < 10) {
            stringMM = "0" + mm;
        }
        let todayString: string;
        todayString =  yyyy + '-' + stringMM + '-' + stringDD;

        return todayString;
    }
}