import {defineStore} from 'pinia'
import quizzes from  '../data/quiz.json'

export const useQuizStore = defineStore("quiz",{
  state: () => ({
    quiz: null,
    totalScore: 0,
    products: []
  }),
  actions: {
    getQuiz(id){
      const result = quizzes.find(  quiz => quiz.id === id)
      if(result){
        this.quiz = result
      } 
    },
    incrementScore(){
      this.totalScore++
    },
    async getAllProducts() {
     const response = await fetch('https://dummyjson.com/products')
     this.products = await response.json()
    }
  }
}) 