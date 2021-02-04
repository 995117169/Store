import React from 'react'
import './style.less'
import classnames from 'classnames'

const Pagination = (props)=>{
    const currentIndex = props.index;
    const len = props.len;
    const arr =new Array(len).fill('');
    return (
        <div className="swiper-pagination">
            <ul>
                {
                    arr.map((ele,index)=>{
                        return <li key={index} className={classnames({selected:index===currentIndex})}></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pagination