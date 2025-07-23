import { postRequest } from '@/service/getRequest'
import React, { use, useEffect } from 'react'
import toast from 'react-hot-toast'

const Post = async({payload} : {payload: any}) => {
    useEffect(() => {
        async function submit() {
            const post = await postRequest('/order', payload)
            if(post){
                toast.success('Sizning buyurtmangiz qabul qilindi')
            }
        }
        submit()
    })
  return (
    <div>Post</div>
  )
}

export default Post