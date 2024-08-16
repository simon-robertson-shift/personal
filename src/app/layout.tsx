import { Noto_Sans, Roboto_Mono } from "next/font/google"

import { ReactNode } from "react"

import "./globals.css"

type Props = {
    readonly children: ReactNode
}

const fontMain = Noto_Sans({ variable: "--font-main", weight: ["400"], subsets: ["latin"] })
const fontMono = Roboto_Mono({ variable: "--font-mono", weight: ["400"], subsets: ["latin"] })

export default function Layout({ children }: Props) {
    const fontClassses = [fontMain.variable, fontMono.variable]

    return (
        <html lang="en" className={fontClassses.join(" ")}>
            <body>{children}</body>
        </html>
    )
}
