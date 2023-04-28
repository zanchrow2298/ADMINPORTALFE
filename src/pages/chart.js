
import { CChart } from '@coreui/react-chartjs'
import Sidenav from './sidenav'



const Chart = () => {
    const data = [
        { data1: [5, 2, 3, 4, 5, 6, 7, 8, 9], data2: [12, 10, 5, 10, 12, 3], data3: [10, 23, 5, 11, 15, 16, 23], data4: [23, 10, 11, 16, 10, 1, 5], data10: [10, 10, 10, 10, 10, 10, 10, 10, 10] }
    ];


    const datasets = [];
    for (const key in data[0]) {
        datasets.push({
            label: key.toUpperCase(),
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: `rgba(220, 220, 220, 1)`,
            pointBackgroundColor: "rgba(220, 220, 220, 1)",
            pointBorderColor: "#fff",
            data: data[0][key]
        });
    }

    return (
        <Sidenav>
        <CChart
            type="line"
            data={{
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                datasets: datasets
            }}
            />
        </Sidenav>

            );
        
};



export default Chart;