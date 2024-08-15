import { useLocation } from "@solidjs/router"

import { PageHeader } from "app/components/core/page-header"

import { companyColor, findArticleMetadataByPath } from "app/constants"

export function ArticleHeader() {
    const location = useLocation()
    const article = findArticleMetadataByPath(location.pathname)

    if (article === null) {
        throw new Error("Article not found")
    }

    const backgroundColor = companyColor[article.company]

    return (
        <PageHeader
            title={article.name}
            description={article.description}
            backgroundColor={backgroundColor}
        />
    )
}
