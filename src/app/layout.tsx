import { Viewport } from "next"

import { Roboto_Flex, Roboto_Mono } from "next/font/google"

import { ReactNode } from "react"

import "./globals.css"

type Props = {
    readonly children: ReactNode
}

const fontMain = Roboto_Flex({ variable: "--font-main", subsets: ["latin"] })
const fontMono = Roboto_Mono({ variable: "--font-mono", subsets: ["latin"] })

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1
}

export default function Layout({ children }: Props) {
    const fontClassses = [fontMain.variable, fontMono.variable]

    return (
        <html lang="en" className={fontClassses.join(" ")}>
            <body>{children}</body>
        </html>
    )
}
