import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export const getHandrailsImages = createAsyncThunk('fetch/arplasImages', async (arg, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3333/images-handrail');
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

const handrailSlicer = createSlice({
    name: 'handrails-images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHandrailsImages.fulfilled, (state, action: PayloadAction<TArplas[]>): TArplas[] => {
            state = action.payload
            return state
        }).addCase(getHandrailsImages.rejected, () => {
            console.log('Error occurred')
        })
    }
})

export default handrailSlicer.reducer;
