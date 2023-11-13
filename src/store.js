import { configureStore } from "@reduxjs/toolkit";
import job from './features/job'

export const store = configureStore({
    reducer: {
        job
    }
})

