type Props = {
    readonly data: string[]
}

export function ListElement({ data }: Props) {
    const items = data.map((value, key) => {
        return <li key={key}>{value}</li>
    })

    return <ul>{items}</ul>
}
