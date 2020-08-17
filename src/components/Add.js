import React from 'react';

const Add = props => {
    return (
        <form onSubmit={props.addList}>
            <div>
                <div>
                    <label>Order Id</label>
                    <input type="text" name="food" value={props.orderId} onChange={props.handleInputChange} />
                </div>
                <div>
                    <label>Latest Status</label>
                    <input type="text" name="cost" value={props.latestStatus} onChange={props.handleInputChange} />
                </div>
                <button> Add New Shipment </button>
            </div>
        </form>
    )
}

export default Add;