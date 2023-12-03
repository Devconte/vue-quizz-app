<script setup>
  import { defineProps} from 'vue';
  import { RouterLink } from "vue-router";
  import { useQuizStore } from '../store/quiz.store';

  const quizStore = useQuizStore();
  
  const {numberOfCorrectAnswers, quizQuestionLength} = defineProps([
    "numberOfCorrectAnswers",
    "quizQuestionLength"
  ])
  
</script>


<template>
  <div class="results">
    <p>Your results</p>
    <h1>{{numberOfCorrectAnswers}}/{{quizQuestionLength}}</h1>
    <RouterLink to="/" class="btn">Play again</RouterLink>
    <p>scoreTotal: {{  quizStore.totalScore }}</p>
  </div>
</template>

<style scoped>
  .results {
    text-align: center;
    padding: 100px 0;

  }

  p {
    font-size: 30px;
  }
</style>