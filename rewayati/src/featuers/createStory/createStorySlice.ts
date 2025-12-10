import { Story } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CreateStoryState {
    bigtitle: string,
    des: string,
    subtitle: string,
    subject: string,
    titlesnum: string
}

const initialState: CreateStoryState = {
    bigtitle: '',
    des: '',
    subtitle: '',
    subject: '',
    titlesnum: ''
}

export const storySlice = createSlice({
    name: 'createStory',
    initialState,
    reducers: {
        setBigtitle: (state, action: PayloadAction<string>) => {
            state.bigtitle = action.payload;
        },
        setDes: (state, action: PayloadAction<string>) => {
            state.des = action.payload;
        },
        setSubtitle: (state, action: PayloadAction<string>) => {

            state.subtitle = action.payload
        },
        setSubject: (state, action: PayloadAction<string>) => {
            state.subject = action.payload
        },
        setTitlesNum: (state, action) => {
            state.titlesnum = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { setBigtitle, setDes, setSubject ,setSubtitle , setTitlesNum } = storySlice.actions

export default storySlice.reducer