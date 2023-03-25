import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export const getFacadeImages = createAsyncThunk('fetch/arplasImages', async (arg, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3333/images-facade');
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

const facadeSlicer = createSlice({
    name: 'facade-images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFacadeImages.fulfilled, (state, action: PayloadAction<TArplas[]>): TArplas[] => {
            state = action.payload
            return state
        }).addCase(getFacadeImages.rejected, () => {
            console.log('Error occurred')
        })
    }
})

export default facadeSlicer.reducer;
