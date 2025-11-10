import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from '../../types/article'

export const fetchArticleById =
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    createAsyncThunk<Article, string, ThunkConfig<string>>(
        'articleDetails/fetchArticleById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi
            try {
                const response = await extra.api.get<Article>(`/articles/${articleId}`)
                if (!response.data) {
                    throw new Error()
                }
                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
