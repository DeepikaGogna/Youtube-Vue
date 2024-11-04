import { defineComponent, ref, onMounted, computed } from "vue";
import { useRoute } from 'vue-router';
import { LIVE_CHAT, LIVE_MESSAGES } from '@/utilis/constant'
import ChatMessage from './ChatMessage'
export default defineComponent({
    setup() {
        const route = useRoute();
        const searchParam = computed(() => route.query.v || '');
        const messages = ref([]);
        const liveChatId = ref(null);
    
        onMounted(async () => {
            try {
              // Fetch the live chat ID
              const fetchLiveChatId = async () => {
                const url = LIVE_CHAT.replace("VIDEO_ID", searchParam.value);
                const data = await fetch(url);
                const json = await data.json();
                liveChatId.value = json.items[0]?.liveStreamingDetails?.activeLiveChatId;
              };
      
              await fetchLiveChatId();
      
              // Check if liveChatId is available
              if (!liveChatId.value) return;
      
              // Fetch messages
              const fetchMessages = async () => {
                try {
                  console.log('liveChatId', liveChatId.value);
                  const chaturl = LIVE_MESSAGES.replace("LIVECHAT_ID", liveChatId.value);
                  const chatData = await fetch(chaturl);
      
                  if (!chatData.ok) {
                    throw new Error(`HTTP error! status: ${chatData.status}`);
                  }
      
                  const chatjson = await chatData.json();
                  const chatMessages = chatjson.items || []; // Fallback to an empty array if no messages
      
                  // Update messages
                  messages.value = [...messages.value, ...chatMessages].slice(-50); // Keep the latest 50 messages
                } catch (error) {
                  console.error('Error fetching chat messages:', error);
                }
              };
      
              const intervalId = setInterval(fetchMessages, 1000); // Fetch messages every second
      
              // Cleanup on component unmount
              return () => clearInterval(intervalId);
            } catch (error) {
              console.error('Error fetching live chat ID:', error);
            }
          });
    
      return () => (
        <div className='h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
          <div>
          { messages.value && messages.value.map((c, i) => 
                   <ChatMessage key={i} 
                   profileImageUrl={c.authorDetails?.profileImageUrl}
                   name={c.authorDetails?.displayName} 
                   message={c.snippet?.displayMessage} />
            )}
          </div>
          <div className='w-full p-2 ml-2 border border-black'>
            <input className="w-64" type="text" />
            <button className='px-2 mx-2 bg-green-100'>Send</button>
          </div>
       
        </div>
      )
    }
})