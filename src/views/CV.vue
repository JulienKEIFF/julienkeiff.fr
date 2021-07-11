<template>
  <div id="cv">
        <div class="images">
            <img src="@/assets/img/res/html.png" alt="">
            <img src="@/assets/img/res/js.png" alt="">
            <img src="@/assets/img/res/vue.png" alt="">
            <img src="@/assets/img/res/angular.png" alt="">
            <img src="@/assets/img/res/php.png" alt="">
            <img src="@/assets/img/res/mongo.png" alt="">
            <img src="@/assets/img/res/SQL.png" alt="">
            <img src="@/assets/img/res/docker.png" alt="">
            <img src="@/assets/img/res/csharp.jpg" alt="">
            <img src="@/assets/img/res/dart.jpg" alt="">
            <img src="@/assets/img/res/flutter.png" alt="">
            <img src="@/assets/img/res/kotlin.png" alt="">
        </div>
        <bar class="bar" :dataChart="data1" :height="300" />
  </div>
</template>

<script>
import bar from '../components/charts/bar'

export default {
    name: 'CV',
    components: {bar},
    data(){
        return{
            data1: {
                labels: ['HTML/CSS', 'JavaScript', 'VueJS', 'Angular', 'PHP', 'MongoDB', 'SQL', 'Docker', 'C#', 'Dart', 'Flutter', 'Kotlin'],
                datasets: [{
                    backgroundColor: '#f87979',
                    data: [4, 4, 4, 3, 2, 3, 3, 3, 2, 1, 1, 1]
                }]
            }
        }
    }

}
</script>

<style scoped>
    #cv{display: flex; flex-direction: row; margin: 3% 0;}
    .bar{width: 70%; margin: 0 auto;}
    .images{display: flex; flex-direction: column; width: 4.5%; margin: 0; position: absolute; left: 10%;}
    img{width: 100%; height: 4.8em; object-fit: contain; margin: 4% 0;}
</style>