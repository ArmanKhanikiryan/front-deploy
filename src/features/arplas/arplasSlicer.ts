import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export const getImagesArplas = createAsyncThunk('fetch/arplasImages', async (arg, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3333/images-arplas');
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

const arplasSlider = createSlice({
    name: 'arplas-images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getImagesArplas.fulfilled, (state, action: PayloadAction<TArplas[]>): TArplas[] => {
            state = action.payload
            return state
        }).addCase(getImagesArplas.rejected, () => {
            console.log('Error occurred')
        })
    }
})

export default arplasSlider.reducer;
