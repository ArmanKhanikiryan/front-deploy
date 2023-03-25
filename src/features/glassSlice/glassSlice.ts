import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export const getGlassImages = createAsyncThunk('fetch/arplasImages', async (arg, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3333/images-glass');
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

const glassSlicer = createSlice({
    name: 'glass-images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGlassImages.fulfilled, (state, action: PayloadAction<TArplas[]>): TArplas[] => {
            state = action.payload
            return state
        }).addCase(getGlassImages.rejected, () => {
            console.log('Error occurred')
        })
    }
})

export default glassSlicer.reducer;
