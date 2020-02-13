import PostList from '@/components/PostList.vue'
import PostDetails from '@/components/PostDetails.vue'
import userProfile from '@/components/userProfile.vue'

export default [
  {
    path: '/posts',
    component: PostList
  },
  {
    path: '/profile/:id',
    component: userProfile
  },
  {
    path: '/post/:id',
    component: PostDetails
  }
]
