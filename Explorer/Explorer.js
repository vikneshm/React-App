import React, { useState } from 'react'
import folderlogo from '../images/folder.png'
import '../Styles/explorer.css'
import file from '../images/file.png'

const Explorer = ({explore}) => {
    console.log(explore)
    const [showcontent, setShowcontent] = useState(false)
    const [showInput, setShowInPut] = useState(
        {
            visible: false,
            isFolder: null
        }
    )
    const handleEvent = (e,isFolder) => {
        e.stopPropagation()
        setShowcontent(true)
        setShowInPut({
            visible: true,
            isFolder
        })
    }
console.log(showInput)
    if(explore.isFolder){
        return(
            <div>   
                <div className="folder-outer" onClick={()=>{setShowcontent(!showcontent)}}>
                    <div className='folder-first'>
                        <img src={folderlogo} />
                        <span>{explore.name}</span>
                    </div>
                    <div className='folder-button'>
                        <button onClick={(e)=>{handleEvent(e,true)}} >Folder +</button>
                        <button onClick={(e)=>{handleEvent(e,false)}}>File +</button>
                    </div>
                </div>
                {
                    showInput.visible && (
                        <div className='show-input'>
                            {showInput.isFolder ? <img src={folderlogo}/> : <img src={file} />}
                            <input
                            onBlur={()=>{setShowInPut({...showInput, visible:false})}}
                            type='text'
                            className='input-box'
                            autoFocus ></input>
                        </div>
                    )
                }
                <div style={{display : showcontent?'block':'none',paddingLeft: 25}}>
                    {explore.items.map((item)=>{return(<Explorer explore={item} key={item.id}/>)})}
                </div>               
            </div>
        )
    } else{
        return(
            <div className="file-outer"><img src={file} /><span>{explore.name}</span></div>
        )
    }
}

export default Explorer