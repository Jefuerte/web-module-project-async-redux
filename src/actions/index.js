import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const IS_FETCHING = "IS_FETCHING";
export const ERROR = "ERROR";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const fetchSuccess = (suggestion)=>{
    return({type:FETCH_SUCCESS, payload: suggestion})
}

export const isFetching = () =>{
    return({type:IS_FETCHING})
}

export const getSuggestion = () =>{
    return (dispatch) => {
        dispatch(isFetching());

        axios.get('https://www.boredapi.com/api/activity/')
            .then(resp=> {
                dispatch(fetchSuccess({activity:resp.data.activity, type: resp.data.type, id:Date.now()}))
            })
            .catch(err => {
                dispatch(error(err));
            });
    }
};

export const error = (e)=>{
    return({type:IS_FETCHING, payload: e})
}

export const addFavorite = (suggestion) => {
    return({type:ADD_FAVORITE, payload:suggestion})
}
export const deleteFavorite = (id) => {
    return({type:DELETE_FAVORITE, payload:id})
}