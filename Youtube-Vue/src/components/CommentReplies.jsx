import { defineComponent, onMounted, ref } from "vue";
import { CHILD_COMMENTS } from '@/utilis/constant'

export default defineComponent({
    props: {
        commentId: {
          type: String,
          required: true
        }
      },
    setup(props) {
        const replies = ref([])
        onMounted(() => {
            const getChildComments = async() => {
                const url  = CHILD_COMMENTS.replace("COMMENT_ID", props.commentId);
                const data = await fetch(url);
                const json = await data.json()
                replies.value = json.items;
            }
            getChildComments()
        });
     
      return () => (
        <div>
            {replies.value &&
            replies.value.map((reply) => (
              <div className='flex shadow-sm bg-gray-100 p-2 my-2'>
          <img className="w-12 h-12" 
              src={reply.snippet.authorProfileImageUrl} alt="user" />
              <div className='px-3' key={reply.id}>
                <p className='font-bold text-sm'>{reply.snippet.authorDisplayName}</p>
                <p className='text-xs'>{reply.snippet.textDisplay}</p>
              </div></div>
            )) 
        }
        </div>
      )
    }
})