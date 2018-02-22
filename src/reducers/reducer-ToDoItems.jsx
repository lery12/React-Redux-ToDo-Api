export default function (state = [], action) {


    const newState = Object.assign([], state);
    switch (action.type) {

        case 'ITEM_CLICKED':
            return newState.map((item) => {
                if (action.payload.id === item.id) {
                    item.display = !item.display
                }
                return item
            });

        case 'ITEM_ADD':
            if (action.payload.title !== "") {
                return [...state, action.payload];
            } else {
                return newState;
            }

        case'ITEM_REMOVE':
            return newState.filter(({id}) => id !== action.payload.id);

        case 'ITEM_FETCH':
            console.log(action.payload);
                return newitem;


        default:
            return state
    }

}