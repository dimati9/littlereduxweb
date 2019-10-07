export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsPage(number) {
    return {
        type: 'ITEMS_NEXT_PAGE',
        itemsPage: number
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}
export function itemsStatus(bool) {
    return {
        type: 'ITEMS_STATUS',
        itemsStatus: bool
    };
}
export function itemsFetchData(url, page) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        dispatch(itemsStatus(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsStatus(true));
                dispatch(itemsIsLoading(false));
                dispatch(itemsPage(page));
                dispatch(itemsHasErrored(false))

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items.data)))
            .catch(() => dispatch(itemsHasErrored(true)))

        dispatch(itemsStatus(false));

    };
}
