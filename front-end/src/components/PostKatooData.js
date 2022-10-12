import React from 'react'

function PostKatooData(props) {
    const { ID, title, body } = props
    return (
        <>
            <div className='flex justify-start mt-5 border-solid border-2 border-sky-500'>
                <div>
                    {/* <p>ID:{ID}</p> */}
                    <p className=''>{title}</p>
                    <p className='opacity-50'>{(body.length > 15) ? (body.slice(0, 15) + "...") : (body)}</p>
                </div>
            </div>
        </>
    )
}

export default PostKatooData
