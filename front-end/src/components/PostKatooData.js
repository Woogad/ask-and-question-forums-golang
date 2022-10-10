import React from 'react'

function PostKatooData(props) {
    const { ID, title, body } = props

    return (
        <div>
            <div className='flex justify-center mr-7 mt-5'>
                <a>ID:{ID}</a>
                <a className='ml-1'>{title}</a>
            </div>
        </div>
    )
}

export default PostKatooData
