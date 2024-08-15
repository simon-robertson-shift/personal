import { MetaProvider } from "@solidjs/meta"
import { Route, Router } from "@solidjs/router"

import { PageFooter } from "app/components/core/page-footer"
import { PageNavigator } from "app/components/core/page-navigator"

import { lazy } from "solid-js"

const DownloadableFiles = lazy(() => import("app/components/pages/downloadable-files"))
const Home = lazy(() => import("app/components/pages/home"))
const JitTranslations = lazy(() => import("app/components/pages/jit-translations"))
const ProjectProgression = lazy(() => import("app/components/pages/project-progression"))
const SkillsAndPreferences = lazy(() => import("app/components/pages/skills-and-preferences"))
const SmartFlows = lazy(() => import("app/components/pages/smart-flows"))
const SmartSupport = lazy(() => import("app/components/pages/smart-support"))

export function Application() {
    return (
        <main>
            <PageNavigator />
            <MetaProvider>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/downloadable-files" component={DownloadableFiles} />
                    <Route path="/jit-translations" component={JitTranslations} />
                    <Route path="/project-progression" component={ProjectProgression} />
                    <Route path="/skills-and-preferences" component={SkillsAndPreferences} />
                    <Route path="/smart-flows" component={SmartFlows} />
                    <Route path="/smart-support" component={SmartSupport} />
                </Router>
            </MetaProvider>
            <PageFooter />
        </main>
    )
}
