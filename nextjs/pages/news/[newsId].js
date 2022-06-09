import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  console.log(newsId);
  console.log(router.query);

  return (
    <div className={styles.container}>
      lan olum neden linke {newsId} yazdin la 
    </div>
  )
}
