import { connect } from 'react-redux'
import Charts from 'components/Charts.js'

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const CategoryCharts = connect(
    mapStateToProps,
)(Charts)

export default CategoryCharts