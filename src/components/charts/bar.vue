<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  props: ['dataChart'],
  mounted () {
    this.renderChart(this.dataChart, {
      legend: {display: false}, 
      tooltip: {enabled: false},
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            display: false,
            suggestedMin: 0,
            max: 5,
            steps: 2,
            stepValue: 1,
          }
        }]
      }
    })
  }
}
</script>

<style>

</style>