import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    jobData: undefined,
    RolesFilters: [],
    LevelFilters: [],
    LanguageFilters: [],
    ToolsFilters: []
}

export const job = createSlice({
    name: "job",
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.jobData = action.payload
        },
        addLanguageFilters: (state, action) => {
            const isAlreadyPresent = state.LanguageFilters.find(el => el.name === action.payload)
            if (!isAlreadyPresent) {
                state.LanguageFilters.push({ name: action.payload, id: nanoid(4) })
            }
        },
        addRolesFilters: (state, action) => {
            const isAlreadyPresent = state.RolesFilters.find(el => el.name === action.payload)
            if (!isAlreadyPresent) {
                state.RolesFilters.push({ name: action.payload, id: nanoid(4) })
            }
        },
        addLevelFilters: (state, action) => {
            const isAlreadyPresent = state.LevelFilters.find(el => el.name === action.payload)
            if (!isAlreadyPresent) {
                state.LevelFilters.push({ name: action.payload, id: nanoid(4) })
            }
        },
        addToolsFilters: (state, action) => {
            const isAlreadyPresent = state.ToolsFilters.find(el => el.name === action.payload)
            if (!isAlreadyPresent) {
                state.ToolsFilters.push({ name: action.payload, id: nanoid(4) })
            }
        },
        removeLanguagesFilters: (state, action) => {
            state.LanguageFilters = state.LanguageFilters.filter(el => el.id !== action.payload)
        },
        removeRoleFilters: (state, action) => {
            state.RolesFilters = state.RolesFilters.filter(el => el.id !== action.payload)
        },
        removeLevelFilters: (state, action) => {
            state.LevelFilters = state.LevelFilters.filter(el => el.id !== action.payload)
        },
        removeToolsFilters: (state, action) => {
            state.ToolsFilters = state.ToolsFilters.filter(el => el.id !== action.payload)
        },
        removeAll: (state, action) => {
            state.LanguageFilters = []
            state.RolesFilters = []
            state.LevelFilters = []
            state.ToolsFilters = []
        }
    }
})

export function getJobList(action) {
    return function (dispatch, getState) {
        fetch('./data/data.json')
            .then(res => res.json())
            .then(data => dispatch(addJob(data)))
    }
}


export const { addJob, addLanguageFilters, addRolesFilters, addLevelFilters, addToolsFilters, removeLanguagesFilters, removeRoleFilters, removeLevelFilters, removeToolsFilters, removeAll } = job.actions
export default job.reducer