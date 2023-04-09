export interface IPageContentRepository {
    init(id: string): void
    getJsonLd(): any
    getMetadata(): any

    summaryContent(): (props: any) => JSX.Element

    showDetail():(props: any) => JSX.Element
    showPlugin():(props: any) => JSX.Element
}