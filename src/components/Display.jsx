import './Display.css'
const Display = ({displayval})=>{
    return(
        <>
          <div className="dis_container">
            <input type="text" className='display_input' readOnly value={displayval}/>
          </div>
        </>
    )
}

export default Display