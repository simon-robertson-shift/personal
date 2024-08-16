type Props = {
    readonly data: {
        readonly title: string
        readonly lines: string[]
    }
}

export function CodeElement({ data }: Props) {
    const content = data.lines.map((line, key) => {
        return <span key={key}>{line}</span>
    })

    return (
        <aside>
            <div>
                <span>{data.title}</span>
            </div>
            <div>{content}</div>
        </aside>
    )
}
