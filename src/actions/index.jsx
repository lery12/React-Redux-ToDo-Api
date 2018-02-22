import axios from 'axios';

const API_KEY = "kOaQSI71iqmshpM5OgsPjYVf0rMOp1h3bL3jsnN59sYEUPzMlt";
const fetchUrl = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1";

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const fullDateStamp = `${day}-${month}-${year}`;

export function selectToDo(item) {
    return {
        type: 'ITEM_CLICKED',
        payload: {
            id: item.id,
            display: item.display
        }
    };
}

export function addToDo(item, ToDoId) {

    return {
        type: 'ITEM_ADD',
        payload: {
            id: ToDoId,
            title: item,
            date: fullDateStamp,
            display: false
        }
    };
}

export function removeToDo(id) {
    return {
        type: 'ITEM_REMOVE',
        payload: {
            id: id
        }
    };
}

export function fetchItem(ToDoId) {
    const request = axios.get(fetchUrl, {
        headers: {"X-Mashape-Key": API_KEY}
    });
    return (dispatch) => {
        dispatch({type: "GENERATE_ITEM_ADD"})

        axios.get(fetchUrl, {headers: {"X-Mashape-Key": API_KEY}}).then((response) => {
            dispatch({
                type: 'ITEM_ADD',
                payload: {
                    id: ToDoId,
                    title: response.data.quote,
                    date: fullDateStamp,
                    display: false
                }
            })
        })
            .catch((err) => {
                dispatch({
                    type: 'FAIL',
                    payload: err
                })
            })
    }
}