export const env = {
    // Required for server-side data fetching from the "public" directory.
    domain: process.env.DOMAIN as string
} as const
