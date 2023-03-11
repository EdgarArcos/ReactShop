import React from 'react'
import { Link} from 'react-router-dom'
import { MdOutlineAddBox } from "react-icons/md";


export default function VerMasButton({item}) {
  return (
    <Link to={`/${item.id}`}>
    <spam className="icon_item"><MdOutlineAddBox/></spam>
    </Link>
  )
}
