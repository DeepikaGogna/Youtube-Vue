import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
export default defineComponent ({
    setup(){
        return() => (
            <div className='p-5 shadow-lg'>
              <ul>
             <li> <RouterLink to="/">Home</RouterLink></li>
                <li>Shorts</li>
                <li>subscriptions</li>
              </ul>
              <h1 className='font-bold pt-4'>Explore</h1>
              <ul>
                <li>Trending</li>
                <li>Shooping</li>
                <li>Movies</li>
                <li>Music</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Courses</li>
              </ul>
              <h1 className='font-bold pt-4'>More From YouTube</h1>
              <ul>
                <li>YouTube Premium</li>
                <li>YouTube Studio</li>
                <li>YouTube Music</li>
                <li>YouTube Kids</li>
                </ul>
            </div>
          )
    }
})