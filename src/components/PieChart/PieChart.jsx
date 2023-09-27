import React from 'react';
import Chart from 'react-apexcharts';

import { getAllDonation } from '../utility/utility';

const PieChart = () => {
    const totalDonate = getAllDonation().length
    // const totalDonate = 6
    
    const totalDonation = 12

    const displayPercent = totalDonation / totalDonation

    const availableDonation = 12 - totalDonate
    return (
        <div>
            <div>
                <Chart
                className="w-[800px] mx-auto"
                type='pie'

                height={500}

                series={[totalDonate, availableDonation]}

                options = { {
                    labels: ['Your Donation', 'Total Donation'],
                    colors: ["#11C8A9", "#EE3C47"]
                }}
                >

                </Chart>
            </div>
        </div>
    );
};

export default PieChart;