import React, { FC } from 'react'
import Container from '../../components/ui/Container/Container'
import styles from './blog.module.scss'
import Title from '../../components/ui/Title/Title'
import Scribble from '../../components/ui/Scribble/Scribe'

import Button from '../../components/ui/Button/Button'
import VECTOR from '../../assets/images/vectors/vector_5.svg'
import SCRIBBLE from '../../assets/images/vectors/scribble_1.svg'
import BlogCard from '../../components/BlogCard/BlogCard'
import { blogs } from '../../components/BlogCard/data/blogs'

const Blog: FC = () => {
    const arrayBlog = blogs.slice(0, 2)
    return (
        <div className={styles.blog}>
            <Scribble type="black" />
            <Container>
                <Title
                    title="Article and News"
                    subtitle="News, tips, tricks and more"
                />
                <div className={styles.inner}>
                    <img src={VECTOR} alt="vector" className={styles.vector} />
                    <img
                        src={SCRIBBLE}
                        alt="scribble"
                        className={styles.scribble}
                    />
                    {arrayBlog.map((blog, index) => (
                        <BlogCard
                            key={index}
                            img={blog.img}
                            name={blog.name}
                            title={blog.title}
                            tags={blog.tags}
                            date={blog.date}
                            href={blog.href}
                        />
                    ))}
                </div>
                <Button>BROWSE ALL</Button>
            </Container>
        </div>
    )
}

export default Blog
