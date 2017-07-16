import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '../pages/index'
import Detail from '../pages/detail'

import Analysis from '../pages/detail/analysis'
import Count from '../pages/detail/count'
import Forecast from '../pages/detail/forecast'
import Publish from '../pages/detail/publish'

Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    { 
    	path: '/detail', 
      component: Detail,
      redirect: '/detail/analysis',
      children:[
	      {
	      	path:'analysis',
	      	component:Analysis,
	      	
	      },
	      {
	      	path:'count',
	      	component:Count
	      },

	       {
	      	path:'publish',
	      	component:Publish
	      } ,
	      {
	      	path:'forecast',
	      	component:Forecast
	      }
    	]
  	}
	]
})
