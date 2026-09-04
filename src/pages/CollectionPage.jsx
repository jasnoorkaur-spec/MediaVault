import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { useState } from 'react'
import { clearCollection } from '../redux/features/collectionSlice';
import EmptyCollectPage from '../pages/EmptyCollectPage'

const CollectionPage = () => {

  const dispatch = useDispatch();
  const clearCollect = () =>{
    dispatch(clearCollection());
  }

  const collection = useSelector((state)=>state.collection.items)

  const [Category, setCategory] = useState('All');

  const filtCollec = (Category === 'All' ? collection : collection.filter((item) => item.type === Category))

  const tabs = ['All' , 'Photos' , 'Videos' , 'GIFs']

  return (
    <div>

      {collection.length > 0 ? 
      <div>
        <div className='flex flex-col items-center justify-center gap-3'>

          <section className="px-6 pb-8 pt-12 mt-17 text-center">
            <h1 className=" text-[34px] sm:text-[40px] font-bold tracking-tight text-white/90">
              Your Collection
            </h1>

            <p className="text-violet-400">
              Your saved photos, videos and GIFs.
            </p>
          </section>

          <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
            {tabs.map( function(elem,idx) {
              
              return (
                <button key={idx}

                onClick={()=>{
                  setCategory(elem)
                }}

                className={`${( Category == elem ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white hover:cursor-pointer' )} rounded-lg px-5 py-2 text-[17px]`}>
                  {elem}
                </button>
              )
            })}
          </div>

          <button
            onClick={()=>{
              clearCollect();
            }}
            className="mt-7 mb-12 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-[16px] text-red-400 transition hover:bg-red-700 hover:text-white hover:cursor-pointer"
            > Clear Collection
          </button>

        </div>

        <div className='flex gap-4 flex-wrap justify-center overflow-auto w-full'>

          {filtCollec.map((item,idx)=>{

            return (

              <div key={idx}>
                <CollectionCard item={item}/>
              </div>)

          })}
        </div>
      
      </div> : <EmptyCollectPage />}

    </div>
  )
}

export default CollectionPage   