<script setup>
  import Question from "../components/Question.vue";
  import QuizHeader from "../components/QuizHeader.vue";
  import Result from "../components/Result.vue"
  import { useQuizStore } from "../store/quiz.store.js";
  import {  ref, watch, computed } from "vue";
  

  const quizStore = useQuizStore();

  const currentQuestionIndex = ref(0) 

  const numberOfCorrectAnswers = ref(0)

  const showResults = ref(false)
  // const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

  // watch(() => currentQuestionIndex.value, ()=> {
  //   questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
  
  // })

  const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quizStore.quiz.questions.length}`
  } )
  const barPercentage = computed(() => `${currentQuestionIndex.value/quizStore.quiz.questions.length * 100}%`)

  const onOptionsSelected = (isCorrect) => {
    if(isCorrect) {
      numberOfCorrectAnswers.value++
      quizStore.incrementScore()
    }

    if(quizStore.quiz.questions.length -1 === currentQuestionIndex.value ) {
      showResults.value = true
    }

    currentQuestionIndex.value++
  }

</script>

<template>
  <QuizHeader 
  :questionStatus="questionStatus"
  :barPercentage="barPercentage"
/>
  <div>
    <Question 
    v-if="!showResults"
    :question="quizStore.quiz.questions[currentQuestionIndex]"
    @selectOption="onOptionsSelected"/>
    <Result 
      v-else
      :quizQuestionLength="quizStore.quiz.questions.length"
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
    />
  </div>
  

</template>

<style scoped>



</style>