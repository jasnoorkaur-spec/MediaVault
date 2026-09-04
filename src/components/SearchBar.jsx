import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
import { Search } from 'lucide-react'

const SearchBar = () => {

    const [Text, setText] = useState('')

    const disptach = useDispatch()

    const submitHandler = (e) =>
    {
      e.preventDefault()

      disptach(setQuery(Text))

      setText('')
    }


  return (
    <div className='flex w-full justify-center'>
      <form 
        onReset={()=>{
          console.log('hello');
          
        }}
        onSubmit={ (e) => {
          submitHandler(e)
        }}
        className=" flex lg:w-[60%] md:w-[85%] w-[90%] items-center rounded-2xl border border-white/10 bg-white/10 p-2 shadow-2xl shadow-purple-900/20 backdrop-blur-xl">
        <div className='flex items-center sm:gap-4 gap-2 w-full'>
          <Search color='#62748e' size={23} className='ml-2'/>
          <input
          onChange={ (e) => {
              setText(e.target.value)
          }}
          value={Text}
          required
          type="text"
          placeholder='Search photos, videos, GIFs... '
          className="sm:text-lg text-sm outline-none text-white placeholder:text-slate-500 w-full "
          />
        </div>

        <button className="rounded-xl bg-violet-600/80 sm:text-[17px] text-sm sm:px-7 sm:py-4 px-6 py-3 font-semibold shadow-md shadow-violet-600/30 transition hover:bg-violet-500/90 hover:shadow-lg hover:shadow-violet-500/30">
          Search
        </button>

      </form>
    </div>
  )
}

export default SearchBar