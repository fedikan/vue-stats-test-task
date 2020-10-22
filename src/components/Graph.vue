<script>
import { Line } from 'vue-chartjs';
import moment from 'moment';
import 'moment/locale/ru';
import DATA from '../data';

const dates = [];
const visits = [];

DATA.forEach((data) => {
  dates.push(data.date);
  visits.push(data.visits);
});

const config = {
  type: 'line',
  data: {
    labels: dates,
    datasets: [{
      label: 'Посещения',
      data: visits,
      borderColor: 'rgb(149,1,252)',
      backgroundColor: 'rgb(149,1,252)',
      fill: false,
      borderWidth: 1,
      lineTension: 0,
    }],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: true,
      text: 'Аналитика по визитам',
    },
    tooltips: {
      mode: 'index',
    },
    scales: {
      xAxes: [{
        display: true,
        ticks: {
          maxTicksLimit: 4,
          callback(value) {
            return moment(value).format('ll');
          },
        },
      }],
      yAxes: [{
        display: true,
        ticks: {
          suggestedMin: 0,
          suggestedMax: 300,
        },
      }],
    },
  },
};

export default {
  extends: Line,
  mounted() {
    this.renderChart(config.data, config.options);
  },
};
</script>
