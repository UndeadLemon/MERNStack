

const BoxContainer = (props) => {
    const boxMaker = (boxInfo, i) => {
        return (<div className="box" key={i} style={{backgroundColor:boxInfo[0], height:boxInfo[1]+'px', width:boxInfo[2]+'px'}}></div>)
    }
    return(
        <div className="boxContainer">
            {props.boxOutput.map(boxMaker)}
        </div>
    )
}

export default BoxContainer