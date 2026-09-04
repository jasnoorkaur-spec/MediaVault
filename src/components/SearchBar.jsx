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
    <div>
        <form 
        onReset={()=>{
          console.log('hello');
          
        }}
        onSubmit={ (e) => {
          submitHandler(e)
        }}
        className="mx-auto flex max-w-4xl items-center rounded-2xl border border-white/10 bg-white/10 p-2 shadow-2xl shadow-purple-900/20 backdrop-blur-xl">
  
        <Search color='#62748e' size={23} className='ml-2'/>
        <input
          onChange={ (e) => {
              setText(e.target.value)
          }}
          value={Text}
          required
          type="text"
          placeholder='Search photos, videos, GIFs... '
          className="flex-1 px-4 py-4 text-lg text-white outline-none placeholder:text-slate-500"
        />

        <button className="rounded-xl bg-violet-600/80 text-[17px] px-7 py-4 font-semibold transition hover:bg-violet-500/90 hover:shadow-lg hover:shadow-violet-500/30">
          Search
        </button>

      </form>
    </div>
  )
}

export default SearchBar