import { Show } from "solid-js"

import css from "./index.module.css"

type Props = {
    readonly name: string
    readonly company: string
    readonly description: string
    readonly path: string
}

export function ArticleCard(props: Props) {
    return (
        <a class={css.component} href="/" title={props.name}>
            <Show when={props.company}>
                <span class={css.company}>@ {props.company}</span>
            </Show>
            <span class={css.name}>{props.name}</span>
            <span class={css.description}>{props.description}</span>
        </a>
    )
}
