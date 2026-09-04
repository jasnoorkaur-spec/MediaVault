import React, { useEffect } from 'react'
import { fetchGIFS,fetchPhotos,fetchVideos } from '../API/MediaAPI'
import { setQuery, setLoading, setError,setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => 
{
  const {query,activeTab,results,loading,error} = useSelector((store)=>store.search);

  const disptach = useDispatch()

  useEffect( function() 
  {
    if(!query) return 
    const getData = async () => 
    {

      try 
      {

        disptach(setLoading())

        let data=[]

        if(activeTab=='Photos')
        {
          let response = await fetchPhotos(query)
          data = response.results.map( (item) => ({

            id:item.id,
            type:'Photos',
            title:item.alt_description,
            thumbnail:item.urls.small,
            src:item.urls.full,
            url:item.links.html
            
          }))
        }

        if(activeTab=='Videos')
        {
          let response = await fetchVideos(query)
          data = response.videos.map( (item) => ({

            id:item.id,
            type:'Videos',
            title:item.user.name || 'video',
            thumbnail:item.image,
            src:item.video_files[0].link,
            url:item.url
          }))
        }

        if(activeTab=='GIFs')
        {
          let response = await fetchGIFS(query)
          data = response.data.map( (item) => ({

            id:item.id,
            type:'GIFs',
            title:item.title,
            thumbnail: item.images.downsized.url,
            src:item.images.downsized.url,
            url:item.url
          }))
          console.log(response);
          
          
        }

        disptach(setResults(data))

      } catch (err) {

        disptach(setError(err.message))
      }

    }

    getData()

  } , [query,activeTab] )

  if (error) return <h1>Error</h1>
  if(loading) return <div className="h-screen mx-5 animate-pulse rounded-2xl bg-white/10"></div>

  return (
    <div className='flex gap-4 flex-wrap justify-center overflow-auto mt-3'>

      { results.map((item,idx)=>
        {
          return (

          <div key={idx}>
            <ResultCard item={item}/>
          </div> )

        })
      }
      
    </div>
  )
}

export default ResultGrid