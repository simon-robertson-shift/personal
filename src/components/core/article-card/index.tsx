import { ArticleMetadata, companyColor } from "app/constants"

import { Show } from "solid-js"

import css from "./index.module.css"

type Props = {
    readonly article: ArticleMetadata
}

export function ArticleCard({ article }: Props) {
    const color = companyColor[article.company]

    return (
        <a
            class={css.component}
            href={article.path}
            title={article.name}
            style={{ "background-color": color }}
        >
            <Show when={article.company && article.company !== "*"}>
                <span class={css.company}>@ {article.company}</span>
            </Show>
            <span class={css.name}>{article.name}</span>
            <span class={css.description}>{article.description}</span>
        </a>
    )
}
