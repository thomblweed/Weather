import * as React from 'react';
import { ICityProps } from './ICityProps';

export default class City extends React.Component<ICityProps> {

    public render(): React.ReactElement<ICityProps> {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.country}</h2>
            </div>         
        );
    }
}