import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading,itemsStatus, itemsPage } from './items';

export default combineReducers({
    itemsPage,
    itemsStatus,
    items,
    itemsHasErrored,
    itemsIsLoading
});
