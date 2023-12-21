import { useDispatch } from 'react-redux'
import { type AppDispatch } from 'app/providers/StoreProvider'

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
