import css from "./index.module.css"

type Props = {
    readonly title: string
    readonly source: string
}

function renderSource(source: Props["source"]) {
    return source
        .trim()
        .split(/\r?\n/)
        .map((line) => {
            return <div class={css.line}>{line}</div>
        })
}

export function CodeBlock({ title, source }: Props) {
    return (
        <aside class={css.component}>
            <div class={css.header}>
                <div class={css.title}>{title}</div>
            </div>
            <div class={css.code}>{renderSource(source)}</div>
        </aside>
    )
}
