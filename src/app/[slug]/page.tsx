import { PageRenderer } from "@/components/page-renderer"

import { fetchPageMetadataCollection, fetchPageMetadataForSlug } from "@/data/pages"

import { Metadata } from "next"
import { notFound } from "next/navigation"

// Path information provided by Next.
type PathInfo = {
    readonly params: {
        readonly slug: string
    }
}

type Props = PathInfo

export default async function Page({ params }: Props) {
    const metadata = await fetchPageMetadataForSlug(params.slug)

    if (metadata === undefined) {
        notFound()
    }

    return <PageRenderer metadata={metadata} />
}

// Dynamically generate page metadata based on the [slug] part of the URL.
export async function generateMetadata(info: PathInfo): Promise<Metadata> {
    const metadata = await fetchPageMetadataForSlug(info.params.slug)

    if (metadata === undefined) {
        return {}
    }

    return {
        title: metadata.title,
        description: metadata.description
    }
}

// Register all of the possible [slug] values so the pages can be generated when
// the code is pushed to production (main branch) instead of being generated
// when they are first accessed by a client.
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const collection = await fetchPageMetadataCollection()

    return collection.map((data) => {
        return {
            slug: data.slug
        }
    })
}
