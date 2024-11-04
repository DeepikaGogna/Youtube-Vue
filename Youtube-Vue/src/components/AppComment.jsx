import { defineComponent } from "vue";
import { timeAgo } from '../utilis/format'

export default defineComponent({
    props: {
        comments: {
          type: Object,
          required: true
        }
      },
    setup(props) {
    const {authorDisplayName, textDisplay, publishedAt,authorProfileImageUrl, likeCount} = props.comments.snippet.topLevelComment.snippet
  return ()=> (
    <div className='flex shadow-sm bg-gray-100 p-2 my-2'>
      <img className="w-12 h-12" 
      src={authorProfileImageUrl} alt="user" />
      <div className='px-3'>
      <p className='text-sm'><strong>{authorDisplayName}</strong> {timeAgo(publishedAt)}</p>
      <p className='text-sm'>{textDisplay}</p>
      <p className='text-xs'>Like {likeCount} </p>
      </div>
    </div>
  )
    }
})