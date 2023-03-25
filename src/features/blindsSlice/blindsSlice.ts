import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export const getBlindsImages = createAsyncThunk('fetch/arplasImages', async (arg, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3333/images-blinds');
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

const blindSlicer = createSlice({
    name: 'blinds-images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlindsImages.fulfilled, (state, action: PayloadAction<TArplas[]>): TArplas[] => {
            state = action.payload
            return state
        }).addCase(getBlindsImages.rejected, () => {
            console.log('Error occurred')
        })
    }
})

export default blindSlicer.reducer;
