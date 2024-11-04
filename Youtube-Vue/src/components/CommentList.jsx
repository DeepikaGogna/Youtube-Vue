import { defineComponent } from "vue";
import Comment from './AppComment'
import CommentReplies from './CommentReplies'
export default defineComponent({
    props: {
        comments: {
          type: Array,
          required: true
        }
      },
    setup(props){
        return () => (
            <div>
        {props.comments && props.comments.map(comment => (
          <div key={comment.id}>
            <Comment comments={comment} />
            <div class="border border-l-black ml-5 pl-5">
              <CommentReplies commentId={comment.id} />
            </div>
          </div>
        ))}
      </div>
        )
    }
})