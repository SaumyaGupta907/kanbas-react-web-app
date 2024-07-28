import { createSlice } from "@reduxjs/toolkit";
import { assignments} from "../../Database"

const initialState = {
    assignments: assignments,
    assignment: {
        _id: new Date().getTime().toString(),
        title: "New Assignment",
        course: "CS",
        description: "New Description",
        availableDate: "2024-07-01",
        dueDate: "2024-07-07",
        points: 100
    }
}

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            state.assignments = [
                {...action.payload, _id: new Date().getTime().toString()},
                ...state.assignments,
            ]
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assign) => assign._id !== action.payload
            )
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assign) => {
                if(assign._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assign;
                }
            })
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        setAssignmentCourse: (state, action) => {
            state.assignment.course = action.payload;
        }
    }
});

export const { setAssignments, addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignmentCourse } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;