import { defineComponent } from 'vue'
import Button from './AppButton'
export default defineComponent ({
    setup(){
    const lists = ["All", "Gaming", "Mixes", "Music", "Live", "Cricket", "Cooking" ]
    return () => (
        <div className='flex'>{
        lists.map((list) => {
            return  <Button key={list} name={list}  /> 
        })
        }
        </div>
    )
    }
  })