import { defineComponent, onMounted, ref } from "vue";
import { MOST_POPULAR_VIDEO } from '@/utilis/constant'
import WatchSidebar from './WatchSidebar'
import { RouterLink } from "vue-router";
export default defineComponent({
    setup() {
    const poularVideos = ref([])
    const getMostPopularVideos = async() => {
        const data = await fetch(MOST_POPULAR_VIDEO);
        const json = await data.json();
        poularVideos.value = json.items
      }
      onMounted(()=> {
        getMostPopularVideos()
      })
  return() => (
    <div>
     { poularVideos.value &&   poularVideos.value.map((video) =>  
     <RouterLink key={video.id} to={"/watch?v="+video.id} >
      <WatchSidebar info={video} /></RouterLink>
      )} 
    </div>
  )
    }
})