import { connect } from 'react-redux'
import { addItem, deleteItem } from '../actions'
import List from './List'

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOnClick: (id, category, expenses, incomes) => {
            dispatch(addItem(id, category, expenses, incomes));
        },
        deleteOnClick: (id) => {
            dispatch(deleteItem(id))
        }

    }
}

const CategoryList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

export default CategoryList