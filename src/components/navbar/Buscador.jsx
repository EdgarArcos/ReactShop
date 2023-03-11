import {useSearchParams} from 'react-router-dom'

export default function Buscador() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q')?? ''

    const handleInput = ({target}) =>{
        const {value} = target
        setSearchParams({q : value})
    }

  return (
    <input className='search' type="text" placeholder='Search' value={query} name="Search" onChange={handleInput} />
  )
}
