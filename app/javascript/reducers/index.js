import { combineReducers } from 'redux';
import houses from './houses';
import filter from './filter'
import favorites from './favorites'

const rootReducers = combineReducers({
    houses,
    filter,
    favorites,
})

export default rootReducers