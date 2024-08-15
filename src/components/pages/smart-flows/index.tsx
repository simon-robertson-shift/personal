import { ArticleHeader } from "app/components/core/article-header"
import { Fragment } from "app/components/core/fragment"
import { PageContent } from "app/components/core/page-content"

import { CodeBlock } from "app/components/core/page-content/code-block"

import { codeExample1 } from "./code"

export function SmartFlows() {
    return (
        <Fragment>
            <ArticleHeader />
            <PageContent>
                <article>
                    <h1>Heading One</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a venenatis
                        magna, et ullamcorper odio. Aenean aliquet magna vel congue lobortis.
                        Vestibulum enim metus, rhoncus ut ex sed, venenatis lacinia ipsum. Nullam
                        eleifend nisl vitae ligula imperdiet congue. Praesent sed arcu a lacus
                        vestibulum varius faucibus eget dui. Ut et vulputate arcu. Aenean fermentum
                        erat ut elementum convallis.
                    </p>
                    <ul>
                        <li>List Item One</li>
                        <li>List Item Two</li>
                        <li>List Item Three</li>
                    </ul>
                    <p>
                        Quisque congue metus vitae ornare tincidunt. Etiam pretium, erat quis
                        interdum blandit, odio lectus mattis lectus, ac sagittis nibh ligula id
                        purus. Donec vitae maximus urna. Nunc convallis lorem ac nibh interdum, vel
                        maximus orci porta. Aenean sed auctor mauris. Ut eleifend facilisis elit, id
                        auctor neque scelerisque sed.
                    </p>
                    <h2>Heading Two</h2>
                    <p>
                        Quisque congue metus vitae ornare tincidunt. Etiam pretium, erat quis
                        interdum blandit, odio lectus mattis lectus, ac sagittis nibh ligula id
                        purus. Donec vitae maximus urna. Nunc convallis lorem ac nibh interdum, vel
                        maximus orci porta. Aenean sed auctor mauris. Ut eleifend facilisis elit, id
                        auctor neque scelerisque sed.
                    </p>
                    <CodeBlock title="Testing" source={codeExample1} />
                </article>
            </PageContent>
        </Fragment>
    )
}

export default SmartFlows
