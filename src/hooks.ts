import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, ThunkDispatch } from './reducers'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useThunkDispatch = () => useDispatch<ThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector