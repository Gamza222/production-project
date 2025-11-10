// React
import { memo, useEffect } from 'react'

// Third-party libraries
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

// Shared utilities
import { classNames } from 'shared/lib/classNames/classNames'

// Shared hooks
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

// Shared components
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text'
import Skeleton from 'shared/ui/Skeleton/Skeleton'

// Local
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { getArticleDetailsIsLoading } from '../../model/selectors/articleDetais'
import { getArticleDetailsError } from '../../model/selectors/articleDetais'
import { getArticleDetailsData } from '../../model/selectors/articleDetais'

// Styles
import cls from './ArticleDetails.module.scss'



interface ArticleDetailsProps {
    className?: string
    id: string
    translationKey: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id, translationKey } = props
    const { t } = useTranslation(translationKey)
    const dispatch = useAppDispatch()

    // const isLoading = useSelector(getArticleDetailsIsLoading)
    const isLoading = true
    const error = useSelector(getArticleDetailsError)
    const article = useSelector(getArticleDetailsData)

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content; 
    
    if (isLoading) {
        content = (
            <div>
                <Skeleton  className={cls.avatar} width={200} height={200} borderRadius='50%' />
                <Skeleton  className={cls.title} width={300} height={32} />
                <Skeleton  className={cls.skeleton} width={600} height={24} />
                <Skeleton  className={cls.skeleton} width={"100%"} height={200} />
                <Skeleton  className={cls.skeleton} width={"100%"} height={200} />
            </div>
        )
    } else if (error) { 
        content = (
            <Text
                title={t('Произошла ошибка при загрузке статьи')}
                text={t('Попробуйте обновить страницу')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        )
    } else { 
        content = (
            <div>article details</div>
        )
    }
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
