import React from 'react';
const Edit = props => {
    return (
        <form>
            <div>
                <label>Order ID</label>
                <input type="text" name="orderId" value={props.orderId} onChange={props.handleInputChange} />
            </div>
            <div>
                <label className="text-white">Latest Status</label>
                <input type="text" name="latestStatus" value={props.latestStatus} onChange={props.handleInputChange} />
            </div>
            <button onClick={props.update}> Update </button>
            <button onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    )
}

export default Edit;