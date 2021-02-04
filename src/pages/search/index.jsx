import React from 'react'

const Search = (props)=>{
    return (
        <div>
            搜索:{props.match.params.value}
        </div>
    )
}

export default Search