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
        addOnClick: (item) => {
            dispatch(addItem(item));
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