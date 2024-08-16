type Props = {
    readonly data: string
}

export function HeadingElement({ data }: Props) {
    return <h2>{data}</h2>
}
