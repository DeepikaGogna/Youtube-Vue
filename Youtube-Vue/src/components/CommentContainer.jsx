import { defineComponent, onMounted, ref, computed } from "vue";
import { useRoute } from 'vue-router';
import { YOUTUBE_COMMENTS } from '@/utilis/constant'
import CommentList from './CommentList'

export default defineComponent({
    setup(){
        const comments = ref([]);
        const route = useRoute();
        const searchParam = computed(() => route.query.v || '');
  onMounted(()=> {
    getVideoComments()
  })
  const getVideoComments = async() => {
      const url  = YOUTUBE_COMMENTS.replace("VIDEO_ID", searchParam.value);
      const data = await fetch(url);
      const json = await data.json()
      comments.value = json.items;
  }
  return() => (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        {<CommentList v-if={comments.value}  comments={comments.value} />}
    </div>
  )
    }
})