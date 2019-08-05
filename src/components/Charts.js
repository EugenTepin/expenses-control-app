import React from "react";
import Chart from "react-google-charts";
import Spinner from "components/Spinner";



class Charts extends React.Component {
    render() {
        const pieData = this.props.items.map((elem) => {
            return [elem.category, elem.incomes];
        });
        const pieOptions = {
            title: "Share of the category in total income",
            pieHole: 0.4,
            is3D: false
        };

        pieData.unshift(["Category", "Income"]);

        const barData = this.props.items.map((elem) => {
            return [elem.category, elem.expenses, elem.incomes];
        });
        barData.unshift(["Category", "Expenses", "Income"]);

        const barOptions = {
            title: 'Category comparison',
            chartArea: { width: '50%' },
            hAxis: {
                title: '',
                minValue: 0,
            },
            vAxis: {
                title: 'Category',
            },
        };

        return (
            <div>
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    loader={<Spinner />}
                    data={pieData}
                    options={pieOptions}
                />

                <Chart
                    width="100%"
                    height="400px"
                    chartType="BarChart"
                    loader={<Spinner />}
                    data={barData}
                    options={barOptions}
                />
            </div>
        );
    }
}

export default Charts;