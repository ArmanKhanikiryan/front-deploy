import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export const getAutomaticSlide = createAsyncThunk('fetch/arplasImages', async (arg, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3333/images-automatic');
        return await response.json();
    }catch (error){
        thunkAPI.rejectWithValue(error)
    }
})

export interface TArplas {
    url: string,
    name: string
}
const initialState: TArplas[] = []

const automaticSlider = createSlice({
    name: 'automatic-images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAutomaticSlide.fulfilled, (state, action: PayloadAction<TArplas[]>): TArplas[] => {
            state = action.payload
            return state
        }).addCase(getAutomaticSlide.rejected, () => {
            console.log('Error occurred')
        })
    }
})

export default automaticSlider.reducer;
