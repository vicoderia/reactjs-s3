import React from 'react';

const Main = (props) => {
    return (
        <table>
            <thead thead >
                <tr>
                    <th>No</th>
                    <th>Order ID</th>
                    <th>Latest Status</th>
                    <th>Actions</th>
                </tr>
            </thead >
            <tbody>
                {
                    props.listItems.map((listItem) => (
                        <tr key={listItem.id}>
                            <td>{listItem.id}</td>
                            <td>{listItem.orderId}</td>
                            <td>{listItem.latestStatus}</td>
                            <td>
                                <button onClick={() => props.editItem(listItem)}>Edit</button>
                                <button onClick={() => props.deleteItem(listItem.id)}>Delete</button>

                            </td>
                        </tr>
                    )
                    )

                }
            </tbody>
        </table >
    );
}


export default Main;


{/*class Main extends React.Component {
    render() {
        const shipmentList = [
            {
                orderId: 'Victoria-1618',
                latestStatus: 'Checked In Warehouse',
            },
            {
                orderId: 'Joye-1980',
                latestStatus: 'Delivered',
            },
        ];

        return (
            <div className='main-wrapper'>
                <div className='main'>
                    <div className='copy-container'>
                        <h1>SHIPMENT DETAILS</h1>
                        <h2>Welcome to Shipment Details Page</h2>
                    </div>
                    <div className="newrequest">
                        <h3 className='section-title'>Add New Shipment List Request</h3>
                    </div>
                    <div className='lesson-container'>
                        <h3 className='section-title'>Shipment List Request</h3>
                        {shipmentList.map((shipmentItem) => {
                            return (
                                <List
                                    orderId={shipmentItem.orderId}
                                    latestStatus={shipmentItem.latestStatus}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;*/}