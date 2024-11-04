import { defineComponent } from "vue"
export default defineComponent({
    props: {
        profileImageUrl: {
          type: String,
          required: true
        },
        name: {
            type: String,
            required: true
          },
          message: {
            type: String,
            required: true
          }
      },

    setup(props) {
        return () => (
            <div className='flex items-center'>
              <img className="w-6 my-2 rounded-lg" 
              src={props.profileImageUrl} 
              alt="" />
            <span className='font-bold px-2 text-xs'>{props.name}</span>
            <span className='text-xs'>{props.message}</span>
            </div>
          )
    }
})