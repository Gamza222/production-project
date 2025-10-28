import { createAsyncThunk } from '@reduxjs/toolkit'

// App providers
import { type ThunkConfig } from 'app/providers/StoreProvider'

// Entities
import { type Profile } from 'entities/Profile'

// Local
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData =
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    createAsyncThunk<Profile, void, ThunkConfig<string>>(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi
            const formData = getProfileForm(getState())
            try {
                const response = await extra.api.put<Profile>('/profile', formData)
                if (!response.data) {
                    throw new Error()
                }
                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
