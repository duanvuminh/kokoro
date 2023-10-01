export interface IPostPracticeRepository {
    addToList(): (props: any) => JSX.Element | Promise<JSX.Element>
}
