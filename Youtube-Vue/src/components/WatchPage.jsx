import { defineComponent, computed} from 'vue';
import { useRoute } from 'vue-router';
import MostPopularVideos from './MostPopularVideos';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

export default defineComponent({
  setup(){
    const route = useRoute();
    const searchParam = computed(() => route.query.v || '');
  return() => (
      <div className='flex flex-col'>
        <div className='flex px-5 w-full'>
          <div className=''>
          <iframe 
      width="1000" 
      height="500" src={"https://www.youtube.com/embed/"+searchParam.value } 
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
        <CommentContainer />
      </div>

        <div className='w-full'>
          <LiveChat />
          <MostPopularVideos/>
        </div>

    </div>
    </div>
  )
}
})
