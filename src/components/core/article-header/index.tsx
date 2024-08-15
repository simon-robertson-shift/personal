import { PageHeader } from "app/components/core/page-header"

import { findArticleMetadataByPath } from "app/constants"

type Props = {
    readonly path: string
}

export function ArticleHeader({ path }: Props) {
    const article = findArticleMetadataByPath(path)

    if (article === null) {
        throw new Error("Article not found")
    }

    return <PageHeader title={article.name} description={article.description} />
}
