import React from 'react';
import Main from './Main';
import Add from './Add';
import Edit from './Edit';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            userId: 1,
            orderId: '',
            latestStatus: '',
            status: false,
            listItem: {
                id: null,
                userId: 1,
                orderId: '',
                latestStatus: '',
                status: false
            },
            listItems: [{
                id: 1,
                userId: 1,
                orderId: 'Victoria-1618',
                latestStatus: 'Checked In Warehouse',
                status: true
            },
            {
                id: 2,
                userId: 1,
                orderId: 'Joye-1980',
                latestStatus: 'Delivered',
                status: true
            },
            ],
            editing: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.createItem = this.createItem.bind(this);
        this.setEditing = this.setEditing.bind(this);
        this.updateList = this.updateItem.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    addItem(event) {
        event.preventDefault()
        if (!this.state.orderId) return;
        const listItem = {
            id: this.state.listItems.length + 1,
            orderId: this.state.orderId,
            latestStatus: this.state.latestStatus,
            userId: this.state.userId,
            statu: this.state.status
        };

        console.log(listItem);
        this.setState({
            orderId: '',
            latestStatus: '',
            listItem: listItem,
            listItems: [...this.state.listItems, listItem]
        })
        console.log(this.state.listItems);
    }

    deleteItem(id) {
        const listItems = this.state.listItems.filter(item => item.id !== id);
        this.setState({ listItems: listItems });
        if (this.state.editing === true) {
            window.location.reload();
        }
    }

    createItem(currentItem) {
        const updatedCurrentItem = Object.assign({}, currentItem, { status: true });
        const listItems = this.state.listItems.map((listItem, index) => (listItem.id === currentItem.id ? updatedCurrentItem : listItem));
        this.setState({ listItems: listItems })
    }

    editItem(listItem) {
        this.setEditing(true);
        this.setState({
            orderId: listItem.orderId,
            latestStatus: listItem.latestStatus,
            listItem: listItem
        });
        console.log(listItem);
    }

    setEditing(value) {
        if (typeof value !== 'boolean') { throw " This value must either be true or false" }
        this.setState({
            editing: value
        })
    }

    updateItem(event) {
        event.preventDefault();
        const updatedOrder = this.state.orderId;
        const updatedStatus = this.state.latestStatus;
        const updatedListItem = Object.assign({}, this.state.listItem, { orderId: updatedOrder, latestStatus: updatedStatus })
        const listItems = this.state.listItems.map((listItem) => (listItem.id === this.state.listItem.id ? updatedListItem : listItem));
        this.setState({ orderId: '', latestStatus: '', listItems: listItems });
    }

    render() {
        const { latestStatus, orderId, listItems, editing } = this.state;
        return (
            <div className="App">
                <div className="row App-main">
                    <Main
                        listItems={listItems}
                        deleteItem={this.deleteItem}
                        editItem={this.editItem}
                    />
                </div>
                <div className="row App-main">
                    {
                        editing ? (
                            <Edit
                                orderId={this.state.orderId}
                                latestStatus={this.state.latestStatus}
                                handleInputChange={this.handleInputChange}
                                setEditing={this.setEditing}
                                updateItem={this.updateItem}
                            />
                        ) : (
                                <Add
                                    orderId={this.state.orderId}
                                    latestStatus={this.state.latestStatus}
                                    handleInputChange={this.handleInputChange}
                                    addItem={this.addItem}
                                />
                            )
                    }
                </div>
            </div>
        );
    }
}

export default App;