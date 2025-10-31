import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    
    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            ARTICLE DETAILS PAGE
        </div>
    )
})

export default memo(ArticleDetailsPage)