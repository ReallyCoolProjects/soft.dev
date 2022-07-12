import React from 'react'
import GreenBtn from './GreenBtn'

type PostDetails = {
        title : string,
        description : string,
        tags : string[],
        image : string,
}

const PostCard = (props:PostDetails) => {
    let text = { text : 'read more'}
  return (
    <div className="flex justify-center border border-grey border-4 rounded-lg">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <img className="rounded-t-lg" src={props.image} alt={props.title} />
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
      <p className="text-gray-700 text-base mb-4">
       {props.description.split('.')[0]}
      </p>
     <GreenBtn {...text} />
    </div>
  </div>
</div>
  )
}

export default PostCard