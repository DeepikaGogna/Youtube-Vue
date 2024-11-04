import { defineComponent } from "vue";
import Sidebar from "./AppSidebar"
import MainContainer from './MainContainer'
export default defineComponent({
    setup(){
        return () => (
            <div className='grid grid-flow-col'>
              <Sidebar/>
              <MainContainer />
            </div>
          )
    }
})