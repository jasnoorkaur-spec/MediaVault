// import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {

    const tabs = ['Photos', 'Videos' , 'GIFs']

    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)

  return (

    <div className='flex gap-4 justify-center items-center m-17 '>

        {tabs.map( function (elem,idx)
        {
            return (
                
            <button key={idx}
            className={` ${( activeTab==elem ? 'bg-violet-600/80 transition hover:bg-violet-500/90 hover:shadow-lg hover:shadow-violet-500/30' : 'bg-white/10 text-slate-400' )} rounded-xl capitalize font-medium text-xl px-9 py-3 cursor-pointer active:scale-98 border border-white/10 shadow-2xl shadow-purple-900/30 backdrop-blur-2xl`}
            onClick={()=>{
                
                dispatch(setActiveTab(elem));

            }}
            >{elem}</button> )

        })}

    </div>

  )
}

export default Tabs