import React from 'react';

class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.plainState = {
            category: '',
            expenses: '',
            incomes: ''
        };
        this.state = this.plainState;
    }

    isSateValid = () => {
        let state = this.state;
        return Object.keys(state).every((prop) => { return state[prop] !== ''; });
    }

    isValidNumberInputValue = (value) => {
        let numValue = parseFloat(value);
        return !(Number.isNaN(numValue) || numValue < 0);
    }

    handleCategoryChange = (e) => {
        this.setState({ category: e.target.value });
    }

    handleExpensesChange = (e) => {
        let value = e.target.value;
        this.setState((state) => {
            return (this.isValidNumberInputValue(value)) ? { expenses: parseFloat(value) } : { expenses: state.expenses };
        });
    }

    handleIncomesChange = (e) => {
        let value = e.target.value;
        this.setState((state) => {
            return (this.isValidNumberInputValue(value)) ? { incomes: parseFloat(value) } : { incomes: state.incomes };
        });
    }

    handleSubmit = (e) => {
        if (this.isSateValid()) {
            this.props.add({ ...this.state, id: Date.now() });
            this.setState(this.plainState);
        }
        e.preventDefault();
    }

    render() {
        return (
            <form className="pb-4" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" name="category" className="form-control" placeholder="Category" value={this.state.category} onChange={this.handleCategoryChange} />
                    </div>
                    <div className="col">
                        <input type="text" name="expenses" className="form-control" placeholder="Expenses" value={this.state.expenses} onChange={this.handleExpensesChange} />
                    </div>
                    <div className="col">
                        <input type="text" name="incomes" className="form-control" placeholder="Incomes" value={this.state.incomes} onChange={this.handleIncomesChange} />

                    </div>
                    <div className="col">
                        <input name="add" className="btn btn-primary" type="submit" value="Add" />
                    </div>
                </div>

            </form>
        );
    }
}

export default AddItemForm;