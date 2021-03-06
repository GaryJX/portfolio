import React from 'react'
import Image from 'next/image'
import styles from './Project.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { Fade } from 'react-awesome-reveal'

export type ProjectProps = {
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  screenshotSrc: string
  direction?: 'left' | 'right'
}

const Project: React.FC<ProjectProps> = (props) => {
  const {
    title,
    description,
    technologies,
    github,
    demo,
    screenshotSrc,
    direction = 'left',
  } = props

  return (
    <Fade className={styles.projectWrapper} triggerOnce direction={direction}>
      <div className={styles.project}>
        <div className={styles.projectContent}>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className={styles.projectTitle}
          >
            {title}
          </a>
          <div className={styles.projectDescription}>{description}</div>
          <ul className={styles.projectStack}>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className={styles.links}>
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href={demo} target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          </div>
        </div>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className={styles.projectImage}
        >
          <Image
            loading="eager"
            src={screenshotSrc}
            alt="Find My IP Project"
            layout="fill"
            objectFit="cover"
          />
        </a>
      </div>
    </Fade>
  )
}

export default Project
