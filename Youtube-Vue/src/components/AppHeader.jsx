import { defineComponent, onMounted } from 'vue'
import { AUTO_SEARCH } from '@/utilis/constant'

export default defineComponent({
    setup() {
            //call function everytime if text will update in search bar
        onMounted(() => {
            const timer = setTimeout(() => {
            if(searchCache){
                getSearchSuggestion()
            }else{
                getSearchSuggestion()
            }
            }, 200);
            return() => {
            clearTimeout(timer);
            }
        })

        const toggleMenuHandler = () => {
           // dispatch(toggleMenu());
        }

        const getSearchSuggestion = async()=> {
           /*  const data = await fetch(AUTO_SEARCH + searchQuery)
            const json = await data.json();
            setSearchSuggestion(json[1])
        
            //update the cache
            dispatch(
              cacheResults({
                [searchQuery]:json[1]
            })) */
          }

        return () => (
            <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
                <div className='flex col-span-1'>
                <img 
                onClick={() => toggleMenuHandler()}
                className='h-8 cursor-pointer'
                alt="menu"
                src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" />
             <a href="/"> <img 
              className='h-8 mx-2'
              alt="YouTube Logo" 
              src="https://w7.pngwing.com/pngs/71/189/png-transparent-vidcon-us-youtube-logo-advertising-television-youtube-television-text-trademark-thumbnail.png" />
                </a></div>
                <div className='col-span-10 items-center'>
                  <div>
                    <input 
                    className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
                    type="text"
                    value=""
                     />
                    <button 
                    className='rounded-r-full border border-gray-400 px-4 py-2 bg-gray-100'>🔍</button>
                    </div>
                    <div className='fixed bg-white w-[34rem] rounded-lg shadow-lg p-2 border border-gray-100'>
                    <ul>
                      
                    </ul>
                    </div>
                </div>
                <div className='col-span-1'>
                    <img 
                    className='h-8'
                    alt="User Icon" 
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                </div>
               </div>
          )
    }

})