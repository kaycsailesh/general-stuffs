interface Content {
  rendered: string
}

interface Title {
  rendered: String
}

export interface Post {
  id: number,
  slug: string,
  status: string,
  link: string,
  title: Title,
  date: string,
  content: Content
}
