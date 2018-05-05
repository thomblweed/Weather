import * as React from 'react';
import { IWeatherProps } from './IWeatherProps';
import City from '../City/City';
import Day from '../Day/Day';
import {IWeatherList } from './IWeather';
export interface IDayLists {
    date: string, 
    list: IWeatherList[]
}

export default class Weather extends React.Component<IWeatherProps> {
    // variables
    private arrayDates: string[] = [];
    private uniqueDates: string[] = [];
    private distinctDayLists: IDayLists[] = [];

    constructor(props: IWeatherProps) {
        super(props);
        // get values for variables, used to render Day components
        // as the api data returned does not group into days by default
        this.arrayDates = this.getArrayDates();
        this.uniqueDates = this.getUniqueDates();
        this.distinctDayLists = this.getDistinctDayLists();        
    }
    
    public render(): React.ReactElement<IWeatherProps> {
        return (
            <div>
               <City 
                name={this.props.city.name}
                country={this.props.city.country}
               />
               {this.createDayComponents()}
            </div>         
        );
    }

    private createDayComponents(): Object {
        return Object
         .keys(this.uniqueDates)
          .map(key => {
            return (
                <Day 
                 key={key}
                 list={this.distinctDayLists[key].list}
                 date={this.distinctDayLists[key].date}
                />
            );
        });
    }

    private getArrayDates(): string[] {
        // get all dates into an array from the lists
        let arrayDates: string[] = []; 
        let listLength: number = this.props.list.length;

        for(let i = 0; i < listLength; i++) {
            arrayDates.push(this.props.list[i].dt_txt.slice(0,10));
        }

        return arrayDates;
    }

    private getUniqueDates(): string[] {
        // get the unique dates from the array to render Day components
        let uniqueDates: string[] = this.arrayDates.filter((value, index, date) => index === date.indexOf(value) );

        return uniqueDates;
    }

    private getDistinctDayLists(): IDayLists[] {        
        // get distinct Lists for each Day component
        let distinctDayLists: IDayLists[] = [];

        this.uniqueDates.filter((value, index) => {
            let currentLists: IWeatherList[] = [];
            this.props.list.filter((li) => {
                if(li.dt_txt.slice(0,10) === value) {
                    currentLists.push(li);
                }
            });
            distinctDayLists.push( { date: value, list: currentLists } );
        });

        return distinctDayLists;
    }
}