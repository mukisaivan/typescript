import { ReactElement } from "react"

type HeadingProp = {title: string}

export default function Heading({ title }: HeadingProp): ReactElement {
  return <h1>{title}</h1>
}