import { MetaProvider } from "@solidjs/meta"
import { Route, Router } from "@solidjs/router"

import { PageFooter } from "app/components/page-footer"
import { PageNavigator } from "app/components/page-navigator"

import { lazy } from "solid-js"

const Home = lazy(() => import("app/components/routes/home"))

export function Application() {
    return (
        <MetaProvider>
            <PageNavigator />
            <Router>
                <Route path="/" component={Home} />
            </Router>
            <PageFooter />
        </MetaProvider>
    )
}
