import css from "./index.module.css"

type Props = {
    readonly children?: any
}

export function ArticleCardContainer(props: Props) {
    return <nav class={css.component}>{props.children}</nav>
}
