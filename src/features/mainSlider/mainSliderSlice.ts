import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export const getMainImages = createAsyncThunk('fetch/mainSliderSlice', async (arg, thunkAPI) => {

    try {
        const response = await fetch('http://localhost:3333/images-main')
        return response.json()

    }catch (error){
        thunkAPI.rejectWithValue(error)
    }
})

export interface TMainSlider {
    name: string,
    url: string
}
const initialState: TMainSlider[] = []

const mainSliderSlice = createSlice({
    name: 'main-slider-images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMainImages.fulfilled, (state:TMainSlider[], action: PayloadAction<TMainSlider[]>): TMainSlider[] => {
            state = action.payload
            return state
        }).addCase(getMainImages.rejected, (state,action) => {
            console.log('Error occurred')
        })
    }
})


export default mainSliderSlice.reducer;
