import React from 'react'
import { useDispatch } from 'react-redux'
import {removeCollection, removeToast} from "../redux/features/collectionSlice"

const CollectionCard = ({item}) => {

    const dispatch = useDispatch();

    const removeCollect = (item) => {
        dispatch ( removeCollection(item) );
        dispatch( removeToast() );
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
        onClick={()=>{
            removeCollect(item);
        }}
        className="
          active:scale-95
          absolute right-2 bottom-3
          md:translate-y-2 md:opacity-0 sm:opacity-100
          rounded-xl bg-violet-600/80 px-3 py-2
          transition-all duration-300
          md:group-hover:translate-y-0
          md:group-hover:opacity-100">
          Remove
        </button>

      </div>
    </div>
  )
}

export default CollectionCard