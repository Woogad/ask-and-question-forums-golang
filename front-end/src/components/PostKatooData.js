import React from 'react'

function PostKatooData(props) {
    const { ID, title, body } = props
    return (
        <div className='px-96'>
            <div className='flex justify-start mt-5 border-solid border-2 border-amber-500 hover:bg-amber-200 p-2 rounded-xl'>
                <div>
                    {/* <p>ID:{ID}</p> */}
                    <p className=''>{title}</p>
                    <p className='opacity-50'>{(body.length > 15) ? (body.slice(0, 15) + "...") : (body)}</p>
                </div>
            </div>
        </div>
    )
}

export default PostKatooData
