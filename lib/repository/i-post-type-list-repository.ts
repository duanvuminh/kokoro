export interface IPostTypeListRepository {
  breakToPices: () => void;
  linkPices(): (props: any) => JSX.Element | JSX.Element;
}
