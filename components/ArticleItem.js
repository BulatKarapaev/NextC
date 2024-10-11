import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <dev className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </dev>
    </Link>
  )
}

export default ArticleItem
