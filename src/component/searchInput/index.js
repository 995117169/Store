import React from "react"
import "./style.less"
import {withRouter} from 'react-router-dom'

const SearchInput = (props) =>{

    function keyUp(e){
        if(e.target.value.length>0){
            if(e.keyCode === 13){
             props.history.push('/search/'+e.target.value)
        }
        }
    }

    return(
        <input 
            className="search-input"
            type="text"
            onKeyUp={keyUp}
        />
    )
}

export default withRouter(SearchInput)