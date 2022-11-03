import { useReducer } from "react";
import BoxContainer from "./boxContainer";
import BoxInput from "./boxInput";

const initialState = {
    boxes: [],
    color: 'red',
    height: 100,
    width: 100
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'boxAdd':
            return {
                ...state,
                boxes: state.boxes.concat([action.payload])
            }
        case 'colorChange':
            return {
                ...state,
                color: action.payload
            }
        case 'heightChange':
            return {
                ...state,
                height: action.payload
            }
        case 'widthChange':
            return {
                ...state,
                width: action.payload
            }
        default:
            throw new Error();
    };
}
const BoxParent = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleBoxInput = (e) => {
        e.preventDefault();
        const value = [e.target[0].value, e.target[1].value, e.target[2].value];
        dispatch({
            type: 'boxAdd',
            payload: value
        })
        dispatch({
            type: 'colorChange',
            payload: ''
    })
    }
    const handleColorInput = (e) => {
        e.preventDefault();
        const value = [e.target.value]
        dispatch({
            type: 'colorChange',
            payload: value
        })
    }
    const handleHeightInput = (e) => {
        e.preventDefault();
        const value = [e.target.value]
        dispatch({
            type: 'heightChange',
            payload: value
        })
    }
    const handleWidthInput = (e) => {
        e.preventDefault();
        const value = [e.target.value]
        dispatch({
            type: 'widthChange',
            payload: value
        })
    }
    return(
        <div>
        <BoxInput boxInput={handleBoxInput} handleColorInput={handleColorInput} handleHeightInput={handleHeightInput} handleWidthInput={handleWidthInput} color={state.color} height={state.height} width={state.width}/>
        <BoxContainer boxOutput={state.boxes}/>
        </div>
    )
}

export default BoxParent