import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export const getAluminiumImages = createAsyncThunk('fetch/arplasImages', async (arg, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3333/images-aluminium');
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

const aluminiumSlicer = createSlice({
    name: 'arplas-images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAluminiumImages.fulfilled, (state, action: PayloadAction<TArplas[]>): TArplas[] => {
            state = action.payload
            return state
        }).addCase(getAluminiumImages.rejected, () => {
            console.log('Error occurred')
        })
    }
})

export default aluminiumSlicer.reducer;
