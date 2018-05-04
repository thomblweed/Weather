import * as React from 'react';
import { IWeatherProps } from './IWeatherProps';
import City from '../City/City';
import Day from '../Day/Day';
import {IWeatherList } from './IWeather';

export default class Weather extends React.Component<IWeatherProps, {}> {
    
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
        
        // get all dates into an array from the lists
        let arrayDates: string[] = []; 
        let listLength: number = this.props.list.length;
        for(let i = 0; i < listLength; i++) {
            arrayDates.push(this.props.list[i].dt_txt.slice(0,10));
        }

        // get the unique dates to render Day components
        let uniqueDates: string[] = arrayDates.filter((value, index, date) => index === date.indexOf(value) );
        
        // get distinct Lists for each Day component
        let distinctDayLists: { date: string, list: IWeatherList[] } [] = [];
        uniqueDates.filter((value, index) => {
            let currentLists: IWeatherList[] = [];
            this.props.list.filter((li) => {
                if(li.dt_txt.slice(0,10) === value) {
                    currentLists.push(li);
                }
            });
            distinctDayLists.push( { date: value, list: currentLists } );
        });

        return Object
         .keys(uniqueDates)
          .map(key => {
            return (
                <Day 
                 key={key}
                 list={distinctDayLists[key].list}
                 date={distinctDayLists[key].date}
                />
            );
        });
    }
}