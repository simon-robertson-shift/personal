import { ReactNode } from "react"

type Props = {
    readonly children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
