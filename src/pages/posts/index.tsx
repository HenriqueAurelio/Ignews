import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating bla bal</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              harum quis assumenda accusamus asperiores, fugiat incidunt eaque
              expedita perspiciatis. Sed omnis praesentium reprehenderit dolor
              ut corporis iure quos nisi modi.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating bla bal</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              harum quis assumenda accusamus asperiores, fugiat incidunt eaque
              expedita perspiciatis. Sed omnis praesentium reprehenderit dolor
              ut corporis iure quos nisi modi.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating bla bal</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              harum quis assumenda accusamus asperiores, fugiat incidunt eaque
              expedita perspiciatis. Sed omnis praesentium reprehenderit dolor
              ut corporis iure quos nisi modi.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
