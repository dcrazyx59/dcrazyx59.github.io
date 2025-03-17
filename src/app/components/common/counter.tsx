import { useDispatch, useSelector } from "react-redux";
import {increment} from '../../../redux/features/counter-slice'
import type { RootState } from '../../../redux/store';

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch()

    return (
        <button 
            className="bg-red-700 hover:bg-red-600 active:bg-red-800 h-9 w-23 mx-auto rounded-4xl" 
            onClick={() => {dispatch(increment())}}
        > Counter {count}
        </button>
    )
}   