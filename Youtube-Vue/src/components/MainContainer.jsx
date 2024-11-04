import { defineComponent } from "vue";
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'
export default defineComponent ({
    setup(){
        return () => (
            <div className='col-span-11'>
              <ButtonList/>
              <VideoContainer />
            </div>
          )
    }
})