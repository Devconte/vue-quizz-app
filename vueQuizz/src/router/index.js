import {createRouter, createWebHistory} from 'vue-router'
import QuizzesView from '../views/QuizzesView.vue'
import QuizView from '../views/QuizView.vue'
import quiz from '../data/quiz.json'
import { useQuizStore} from '../store/quiz.store.js'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          name: 'Quizzes',
          component: QuizzesView,
        },
        {
          path: '/quiz/:id',
          name: 'Quiz',
          component: QuizView,
          beforeEnter: (to) => {
            const id = Number(to.params.id)
            const quizStore = useQuizStore()
            quizStore.getQuiz(id)
            if (!quizStore.quiz){
              return { name: 'Quizzes'}
            }
          }
        },
      ]})

      router.beforeEach(async() => {
        const quizStore = useQuizStore()
        if(quizStore.products.length === 0){
          await quizStore.getAllProducts()
        }
      })

export default router