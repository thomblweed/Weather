import * as React from 'react';
import { IWeatherProps } from '../Weather/IWeatherProps';
import City from '../City/City';

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
                <div key={key}>
                List!
                <span>{key}</span>
                </div>
            );
        });
    }
}