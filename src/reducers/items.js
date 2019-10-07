export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsStatus(state = false, action) {
    switch (action.type) {
        case 'ITEMS_STATUS':
            return action.itemsStatus;

        default:
            return state;
    }
}

export function itemsPage(state = 0, action) {
    switch (action.type) {
        case 'ITEMS_NEXT_PAGE':
            return action.itemsPage;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
