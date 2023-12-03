<script setup>
  import q from "../data/quiz.json"
  import { ref, watch, onMounted } from "vue";
  import Card from "../components/Card.vue";
import { useQuizStore } from "../store/quiz.store";
  const quizzes = ref(q);
  const search = ref("");
const quizStore = useQuizStore()
  watch(search, ()=> {
    quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })

console.log(quizStore.products)

</script>

<template>
  <div >
    <header>
      <h1>Quizzes</h1>
      <input type="text" v-model.trim="search" placeholder="search...">
    </header>
    <div class="options-container"></div>
     <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz"/>
  </div>
</template>

<style scoped>

  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;

  }

  header input {
    border:none;
    background-color: rgba(12,128,128,0.1);
    padding: 10px;
    border-radius: 5px;  }


  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

</style>