import {atom} from 'recoil'

export const budgetState = atom({
    key : "budgetState",
    default : 1000000,
})

export const itemsState = atom({
    key: 'itemsState',
    default: [
    ]
})