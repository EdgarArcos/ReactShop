import React from 'react'
import { Link} from 'react-router-dom'

export default function VerMasButton({item}) {
  return (
    <Link to={`/${item.id}`}>
    <button>Ver mas</button>
    </Link>
  )
}
