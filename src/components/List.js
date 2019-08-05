import React from 'react';
import AddItemForm from 'components/AddItemForm';

class List extends React.Component {
    deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            this.props.deleteOnClick(id);
        }
    }
    render() {
        // move up into props
        const headersList = ['category', 'expenses', 'incomes'];
        const items = this.props.items.map((elem) => {
            let columns = headersList.map((name) => {
                let value = elem[name] || '';
                return <td key={name}>{value}</td>;
            });
            columns.push(<td key="action"><button className="btn btn-danger" onClick={(e) => { this.deleteHandler(elem.id); }}>Delete</button></td>)
            return <tr key={elem.id}>{columns}</tr>
        });

        const headers = headersList.map((name) => {
            return <th key={name} >{name}</th>;
        });
        headers.push(<th key="action" >action</th>)

        return (
            <>
                <AddItemForm add={this.props.addOnClick} />
                <table className="table table-striped category_list">
                    <thead>
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </>
        );
    }
}
export default List;