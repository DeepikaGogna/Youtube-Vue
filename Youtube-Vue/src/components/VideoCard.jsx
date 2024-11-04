import { defineComponent } from "vue";
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
        return () =>  (
          <div className='shadow-lg p-2 m-2 w-72'>
            <img className="rounded-lg" src={thumbnails.high.url} alt={thumbnails.medium.url} />
            <ul>
              <li className='font-bold py-2'>{title}</li>
              <li>{channelTitle}</li>
              <li>{statistics.viewCount}</li>
            </ul>
          </div>
        )
    }
})