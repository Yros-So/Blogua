import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import SuggestedPosts from './container/SuggestedPosts'
import CommentsContainers from '../../components/comments/CommentsContainers'
import { Link } from 'react-router-dom'

const breadCrumbsData = [
    {name: "Home", link:'/'},
    {name: "Blog", link:'/blog'},
    {name: "Article title", link:'/blog/1'},
]

const postData = [
    {
        _id: "1",
        image: images.Post02,
        title: "Help children get better education",
        createdAt: "2024-12-12T11:35:25.607+0000",
    },
    {
        _id: "2",
        image: images.Post02,
        title: "Help children get better education",
        createdAt: "2024-12-12T11:35:25.607+0000",
    },
    {
        _id: "3",
        image: images.Post02,
        title: "Help children get better education",
        createdAt: "2024-12-12T11:35:25.607+0000",
    },
    {
        _id: "4",
        image: images.Post02,
        title: "Help children get better education",
        createdAt: "2024-12-12T11:35:25.607+0000",
    },
];

const tagsData = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Healthy",
    "Food",
    "Diet",
    "Education",
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-1 py-12 lg:flex-row lg:gap-x-8 lg:items-start'>
            <article className='flex-1'>
                <BreadCrumbs data={breadCrumbsData} />
                <img 
                    className='rounded-xl w-full'
                    src={images.Post02} 
                    alt="Laptop" 
                />
                <Link to='/blog?category=selectedCategory' className='text-primary text-sm font-roboto inline-block mt-4'>
                    EDUCATION
                </Link>
                <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>
                  Help children get better education 
                </h1>
                <div className='mt-4 text-dark-soft '>
                    <p className='leading-7' >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        It is a long established fact that a reader will be distracted by the readable content of a 
                        page when looking at its layout. The point of using Lorem Ipsum is that 
                        it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                        Many desktop publishing packages and web page editors now use 
                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
                        Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>
                <CommentsContainers className='mt-10' logginedUserId="a" />
            </article>
            <SuggestedPosts header='Latest Article' 
                posts={postData} 
                tags={tagsData}
                className="mt-8 lg:mt-0 lg:max-w-xs"
            />
        </section>
    </MainLayout>
  )
}

export default ArticleDetailPage
