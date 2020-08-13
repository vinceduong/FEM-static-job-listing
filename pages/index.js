import Head from 'next/head'
import styles from '../styles/Home.module.css'
import jobs from '../data/data.json'

console.log('data', jobs)
export default function Home() {
  return (
    <>
      <Head >
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link href="https://fonts.googleapis.com/css2?family=Spartan&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap" rel="stylesheet"></link>
        <title>Frontend Mentor | Job Listings</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
        </div>
        <div className={styles.main}>
          <div className={styles.jobList}>
            {jobs.map((job, key) => (
              <div key={key} className={styles.jobContainer}>
                <img src={job.logo.slice(8)} />
                <div className={styles.infoContainer}>
                  <div className={styles.infoHeader}>
                    <div className={styles.company}>
                      {job.company}
                    </div>
                    <div className={styles.tags}>
                      {job.new ?
                        <div className={styles.tagNew}>
                          NEW!
                        </div> : null}
                      {job.featured ?
                        <div className={styles.tagFeatured}>
                          FEATURED
                        </div> : null}
                    </div>
                  </div>
                  <div className={styles.infoMain}>
                    {job.position}
                  </div>
                  <div className={styles.infoFooter}>
                    <div>{job.postedAt}</div>
                    •
                    <div>{job.contract}</div>
                    •
                    <div>{job.location}</div>
                  </div>
                </div>
                <div className={styles.skillTags}>
                  {job.languages.map((language, key) =>
                    <div>{language}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
