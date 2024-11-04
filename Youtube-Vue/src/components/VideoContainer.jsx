import { defineComponent, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { YOUTUBE_VIDEO } from '@/utilis/constant'
import VideoCard from './VideoCard'
export default defineComponent({
    setup(){
        const videos = ref([]);
        onMounted(()=> {
          getVideos();
        })
        const getVideos = async() => {
          const data = await fetch(YOUTUBE_VIDEO);
          const json = await data.json();
          videos.value = json.items;
        }
        return () => (
            <div class="flex flex-wrap">
            <AdVideoCard v-if={videos.value[0]} info={videos.value[0]} />
        {videos.value.map(video => (
          <RouterLink
            key={video.id}
            to={'/watch?v=' + video.id}
          >
            <VideoCard info={video} />
          </RouterLink>
        ))}
          </div>
        )
    }
})