import { defineComponent } from "vue"
import {formatViews, timeAgo} from "../utilis/format"

export default defineComponent({
    props: {
        info: {
          type: Object,
          required: true
        }
      },
    setup(props){
        const { snippet, statistics} = props.info
        const {channelTitle, title, thumbnails} = snippet 
        const {publishedAt} = statistics 
        return() =>  (
            <div className='flex flex-row shadow-lg p-2 m-2'>
                <div className='w-36 m-2 flex-none'>
                <img className="rounded-lg" src={thumbnails.high.url} alt={thumbnails.medium.url} />
                </div>
             <div>
             <ul>
                <li className='font-bold py-2 text-sm'>{title}</li>
                <li className='text-xs'>{channelTitle}</li>
                <li className='text-xs'>{formatViews(statistics.viewCount)}  {timeAgo(publishedAt)}</li>
              </ul>
             </div>
             
            </div>
          )
    }
})