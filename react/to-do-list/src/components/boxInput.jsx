

const BoxInput = (props) => {

    return (
        <div>
            <form onSubmit={props.boxInput}>
            <label>Color</label><input name="boxes" onChange={props.handleColorInput} value={props.color} type='text'/><label>Height:</label><input type="number" onChange={props.handleHeightInput} name="height" value={props.height}></input><label>Width:</label><input onChange={props.handleWidthInput} value={props.width} type="number" name="width"></input><input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default BoxInput