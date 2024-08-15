import { ArticleCard } from "app/components/core/article-card"
import { ArticleCardContainer } from "app/components/core/article-card-container"
import { Fragment } from "app/components/core/fragment"
import { PageContent } from "app/components/core/page-content"
import { PageHeader } from "app/components/core/page-header"

import { ArticleMetadata, articles } from "app/constants"

import { For } from "solid-js"

export function Home() {
    function renderArticle(article: ArticleMetadata) {
        return <ArticleCard article={article} />
    }

    return (
        <Fragment>
            <PageHeader
                title="Senior Software Engineer"
                description="@ Shift Platform Ltd"
                metaTitle="Simon Robertson"
                metaDescription=""
            />
            <PageContent expanded={true}>
                <ArticleCardContainer>
                    <For each={articles}>{renderArticle}</For>
                </ArticleCardContainer>
            </PageContent>
        </Fragment>
    )
}

export default Home
