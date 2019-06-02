import * as React from 'react';

export class Application extends React.Component{
    render() {
        return (
            <div className="Application">
                <h1>Where's my phone?</h1>
                <h3>{this.props.location.pathname.slice(1)}</h3>
            </div>
        );
    }
}