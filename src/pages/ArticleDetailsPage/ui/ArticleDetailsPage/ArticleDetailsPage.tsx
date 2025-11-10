import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import cls from './ArticleDetailsPage.module.scss'

import { ArticleDetails } from 'entities/Article'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className } = props
    const translationKey = 'article-details'
    const { t } = useTranslation(translationKey)
    const { id } = useParams<{ id: string }>()
    
    if (!id) { 
        return (
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }
    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails id={id} translationKey='article-details'/>
        </div>
    )
})

export default memo(ArticleDetailsPage)