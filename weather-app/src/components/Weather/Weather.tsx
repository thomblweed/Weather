import * as React from 'react';
import { IWeatherProps } from './IWeatherProps';
import City from '../City/City';
import List from '../List/List';

export default class Weather extends React.Component<IWeatherProps, {}> {
    
    public render(): React.ReactElement<IWeatherProps> {
        return (
            <div>
               <City 
                name={this.props.city.name}
                country={this.props.city.country}
               />
               {this.createListComponents()}
            </div>         
        );
    }

    // CREATE DAY COMPONENT CONTAINER
    // PASS IN RELEVENT LIST COMPONENTS

    // create a List component for each value past through in the list property
    private createListComponents(): Object {

        let arrayDates: string[] = []; 
        let listLength: number = this.props.list.length;
        // get all dates into an array
        for(let i = 0; i < listLength; i++ ) {
            arrayDates.push(this.props.list[i].dt_txt.slice(0,10));
        }

        // get the unique days to render day components
        let uniqueDates: string[] = arrayDates.filter((element, index, date) => index === date.indexOf(element) );
        console.log(uniqueDates);
        
        // get distinct Lists to pass into each Day
        let uniqueLists = this.props.list.filter((element, index, list) => element.dt_txt.slice(0,10) === uniqueDates[index] );
        console.log(uniqueLists);
        debugger;

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
}