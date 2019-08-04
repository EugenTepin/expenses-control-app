import { connect } from 'react-redux'
import Charts from './Charts'

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const CategoryCharts = connect(
    mapStateToProps,
)(Charts)

export default CategoryCharts