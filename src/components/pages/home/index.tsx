import { Meta, Title } from "@solidjs/meta"

import { ArticleCard } from "app/components/core/article-card"
import { ArticleCardContainer } from "app/components/core/article-card-container"
import { Fragment } from "app/components/core/fragment"
import { PageContent } from "app/components/core/page-content"
import { PageHero } from "app/components/core/page-hero"

import { For } from "solid-js"

// temporary test data
const articles = [
    {
        name: "Project",
        company: "The Company",
        description: "A brief description for the project",
        path: "/"
    },
    {
        name: "Project",
        company: "The Company",
        description: "A brief description for the project",
        path: "/"
    },
    {
        name: "Project",
        company: "The Company",
        description: "A brief description for the project",
        path: "/"
    },
    {
        name: "Project",
        company: "The Company",
        description: "A brief description for the project",
        path: "/"
    },
    {
        name: "Project",
        company: "The Company",
        description: "A brief description for the project",
        path: "/"
    }
]

export function Home() {
    return (
        <Fragment>
            <Title>Simon Robertson</Title>
            <Meta name="description" content="" />
            <PageHero />
            <PageContent expanded={true}>
                <ArticleCardContainer>
                    <For each={articles}>
                        {(article) => (
                            <ArticleCard
                                name={article.name}
                                company={article.company}
                                description={article.description}
                                path={article.path}
                            />
                        )}
                    </For>
                </ArticleCardContainer>
            </PageContent>
        </Fragment>
    )
}

export default Home
