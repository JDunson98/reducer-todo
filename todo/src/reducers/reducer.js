export const initialState = [{
    task: 'Prepare Dinner',
    completed: false,
    id: 1
},
{
    task: 'Water the Plants',
    completed: false,
    id: 2
},
{
    task: 'Clean your Room',
    completed: false,
    id: 3
}]

export const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TASK':
            return [...state, action.payload]

        case 'COMPLETE_TASK':
            return state.map((task) => 
                (task.id === action.payload) ? {...task, completed: !task.completed} : task)

        case 'CLEAR_COMPLETED':
            return state.filter((item) => !item.completed)

        default:
            return state;
    };
}