import React from 'react';


class List extends React.Component {
    render() {
        return (
            <div className='lesson-card'>
                <div className='lesson-item'>
                    <p>{this.props.orderId}</p>
                    <p>{this.props.latestStatus}</p>
                </div>
            </div>
        );
    }

}

export default List;