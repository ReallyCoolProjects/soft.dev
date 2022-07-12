import React from 'react'
import GreenBtn from './GreenBtn'

type PostDetails = {
        title : string,
        description : string,
        tags : string[],
        image : string,
        likes : number,
        comments : number,
        bookmarks : number
}

const PostCard = (props:PostDetails) => {
    let text = { text : 'read more'}
  return (
    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img src={props.image} alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-cyan-900">{props.title}</h4>
                <p className="text-gray-600">{props.description.split('.')[0]}</p>
              </div>
              <a href="www.tailus.io" className="block w-max text-cyan-600">Read more</a>
            </div>
           <div className='w-full flex justify-between'>
            <span className='flex justify-between items-center'>
           <i className="fa-solid fa-thumbs-up font-thin text-2xl"></i>
            {props.likes}
            </span>
            <span className='flex justify-between items-center'>
           <i className="fa-solid fa-comment font-thin text-2xl"></i>
            {props.comments}
            </span>
            <span>
           <i className="fa-solid fa-bookmark font-thin text-2xl"></i>
           {props.bookmarks}
            </span>
           </div>
          </div>
        </div>
  )
}

export default PostCard