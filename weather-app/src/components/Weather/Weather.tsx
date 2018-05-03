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
}