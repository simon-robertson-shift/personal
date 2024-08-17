import css from "./index.module.css"

type Props = {
    readonly data: {
        readonly title: string
        readonly lines: string[]
    }
}

export function CodeElement({ data }: Props) {
    const content = data.lines.map((line, key) => {
        return (
            <span key={key} className={css.line}>
                {line}
            </span>
        )
    })

    return (
        <aside className={css.root}>
            <div className={css.header}>
                <span className={css.title}>{data.title}</span>
            </div>
            <div className={css.code}>{content}</div>
        </aside>
    )
}
