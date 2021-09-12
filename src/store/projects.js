import { createSlice } from "@reduxjs/toolkit";


let lastId = 0;

const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded: (projects, action) => {
            projects.push({
            
                id: ++lastId,
                name: action.payload.name
                
            
        });
        },
        projectResolved: (projects, action) => {
            const index = projects.findIndex(bug => bug.id === projects.payload.id)
        projects[index].resolved = true;
        }
    }
})


export const {projectAdded, projectResolved } = slice.actions;
export default slice.reducer;
