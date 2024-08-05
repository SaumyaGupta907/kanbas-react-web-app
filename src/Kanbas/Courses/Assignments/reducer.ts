import { createSlice } from "@reduxjs/toolkit";
//import { assignments} from "../../Database"

const initialState = {
    assignments: [],
}

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignment: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),        
                title: assignment.title,
                course: assignment.course,
                availableDate: assignment.availableDate,
                dueDate: assignment.dueDate,
                points: assignment.points
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignment._id ? assignment : m
            ) as any;
        },
        /** setAssignmentCourse: (state, action) => {
            state.assignment.course = action.payload;
        }*/
    }
});

export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;