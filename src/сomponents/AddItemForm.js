import React from 'react';

class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            expenses: '',
            incomes: ''
        };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleExpensesChange = this.handleExpensesChange.bind(this);
        this.handleIncomesChange = this.handleIncomesChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCategoryChange(event) {
        this.setState({ category: event.target.value });
    }

    handleExpensesChange(event) {
        let value = event.target.value;
        this.setState((state, props) => {
            let newSate = parseFloat(value);
            if (Number.isNaN(newSate) || newSate < 0) {
                newSate = state.expenses;
            }
            return { expenses: newSate };
        });
    }

    handleIncomesChange(event) {
        let value = event.target.value;
        this.setState((state, props) => {
            let newSate = parseFloat(value);
            if (Number.isNaN(newSate) || newSate < 0) {
                newSate = state.incomes;
            }
            return { incomes: newSate };
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        this.props.add(Date.now(), this.state.category, this.state.expenses, this.state.incomes);
        event.preventDefault();
    }

    render() {
        return (
            <form className="pb-4" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Category" value={this.state.category} onChange={this.handleCategoryChange} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Expenses" value={this.state.expenses} onChange={this.handleExpensesChange} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Incomes" value={this.state.incomes} onChange={this.handleIncomesChange} />

                    </div>
                    <div className="col">
                        <input className="btn btn-primary" type="submit" value="Add" />
                    </div>
                </div>

            </form>
        );
    }
}

export default AddItemForm;