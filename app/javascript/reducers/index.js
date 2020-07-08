import { combineReducers } from 'redux';
import houses from './houses';
import filter from './filter'

const rootReducers = combineReducers({
    houses,
    filter,
})

export default rootReducers