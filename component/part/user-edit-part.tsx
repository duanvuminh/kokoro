import { editGithub, githubRepository } from "lib/const";

export function UserEditPart({
  postId,
  postType,
}: {
  postId: string;
  postType: string;
}) {
  let path = "";
  switch (postType) {
    case "word-list":
      path = "/mdx-word-list/" + postId + ".mdx";
      break;
    case "kanji-list":
      path = "/mdx-kanji-list/" + postId + ".mdx";
      break;
    case "kanji":
      path = "/mdx-kanji/" + postId + ".mdx";
      break;
    case "single-page":
      path = "/mdx-single-page/" + postId + ".mdx";
      break;
    default:
      break;
  }
  return (
    <a
      target="_blank"
      className="btn-text float-right"
      href={`${githubRepository}${path}`}
    >
      <sub>{editGithub}</sub>
    </a>
  );
}
