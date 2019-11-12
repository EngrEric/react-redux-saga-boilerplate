export const BOOK_PAGE_INIT = 'BOOK_PAGE_INIT';
export const BOOK_ERROR = 'BOOK_ERROR';
export const BOOK_SUCCESS = 'BOOK_SUCCESS';
export const BOOK_DETAIL_INIT = 'BOOK_DETAIL_INIT';
export const BOOK_DETAIL_ERROR = 'BOOK_DETAIL_ERROR';
export const BOOK_DETAIL_SUCCESS = 'BOOK_DETAIL_SUCCESS';
export const BOOK_DETAIL_CLOSE = 'BOOK_DETAIL_CLOSE';

export function bookPageInit() {
    return {
        type: BOOK_PAGE_INIT,
    };
}

export function bookError(error) {
    return {
        type: BOOK_ERROR,
        error,
    };
}

export function bookSuccess(payload) {
    return {
        type: BOOK_SUCCESS,
        payload
    };
}

export function bookDetailInit(id) {
    return {
        type: BOOK_DETAIL_INIT,
        id 
    };
}

export function bookDetailError(error) {
    return {
        type: BOOK_DETAIL_ERROR,
        error,
    };
}

export function bookDetailSuccess(payload) {
    return {
        type: BOOK_DETAIL_SUCCESS,
        payload
    };
}

export function bookDetailClose() {
    return {
        type: BOOK_DETAIL_CLOSE,
    };
}