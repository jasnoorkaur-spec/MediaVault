import { useDispatch } from "react-redux"
import { addCollection, addedToast } from "../redux/features/collectionSlice"

const ResultCard = ({item}) => {

  const dispatch = useDispatch();

  const addToCollec = (item) =>
  {
    dispatch(addCollection(item))
    dispatch(addedToast())
  }

  return (
    <div className=' w-70 h-65 relative rounded-xl overflow-hidden group border border-slate-400 hover:border-violet-500/60'>

      <a target='_blank' href={item.url} className='h-full '>
          {item.type == 'Photos' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
          {item.type == 'Videos' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} /> : ''}
          {item.type == 'GIFs' ? <img className='h-full w-full object-cover object-center' src={item.src}  /> : ''}
      </a>

      <div id='bottom' className=' absolute bottom-0 w-full p-3 '>

        <h2 className='text-base/snug text-white/75 font-semibold capitalize overflow-hidden max-w-45'>{item.title}</h2>
        
        <button
        className="
          active:scale-95
          absolute right-3 bottom-3
          translate-y-2 opacity-0
          rounded-xl bg-violet-600/80 px-4 py-2
          transition-all duration-300
          group-hover:translate-y-0
          group-hover:opacity-100"

        onClick={()=>{
            addToCollec(item)
            
          }}>
          Save
        </button>

      </div>
    </div>
  )
}

export default ResultCard