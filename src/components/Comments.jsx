import React from 'react'
import { useState, useEffect } from 'react'
import {getArticleComments} from '../utils/ApiCalls'

export default function Comments({ id}) {
    const [comments, setComments] = useState()

     useEffect(() => {
         getArticleComments(id).then((comments) => {
             setComments(comments)
             console.log(comments)
          })
         return () => {
            
         }
     }, [])


    return (
        <div>
            <h3>Comments</h3>
        </div>
    )
}
