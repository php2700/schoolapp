import React from 'react';
// import BlogPostCard from './BlogPostCard';
import BlogPostCard from './blogpost';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import icon from '../assets/home/arrowicon.png'
import myblog from '../assets/home/blogimage.png'

// import blogimg from '../assets/home/blogimage.png'

const blogPostsData = [
    {
        id: 1,
        image: myblog, // Replace with actual image path
        category: 'Blog',
        title: 'What Makes Some Schools in Ludhiana Truly Great?',
        introduction: 'The admission season has again fallen upon us. It has become a periodic practice to rethink your child’s school choices.',
        date: 'February 27, 2024',
        comments: 'No Comments',
    },
    {
        id: 2,
        image: myblog, // Replace with actual image path
        category: 'Blog',
        title: 'Here’s How Top Schools in Ludhiana Are Innovating The Teaching Space',
        introduction: 'For a long time, the school market had been monopolistic in nature. What the statement tries to convey is that.',
        date: 'January 31, 2024',
        comments: 'No Comments',
    },
    {
        id: 3,
        image: myblog,  // Replace with actual image path
        category: 'Blog',
        title: 'The Role of Teachers in Shaping Student Success',
        introduction: 'Introduction What’s the secret behind a successful classroom? Is it just an organised curriculum or a specific teaching method? No,',
        date: 'December 27, 2024',
        comments: 'No Comments',
    },
    {
        id: 4,
        image: myblog,  // Replace with actual image path
        category: 'Blog',
        title: 'Why Emotional Well-being is Just as Important as Academic Success at TSUS?',
        introduction: 'Introduction Have you ever thought about schools being healing spaces, and not just learning spaces? Schools play an important role',
        date: 'December 14, 2024',
        comments: 'No Comments',
    },
    {
        id: 5,
        image: myblog,  // Replace with actual image path
        category: 'Blog',
        title: 'How Co-Curricular Activities Can Miraculously Transform Your Child’s Education?',
        introduction: 'Introduction As a parent, you might have always stumbled upon this one question; are extra-curricular activities beneficial for my child.',
        date: 'November 22, 2024',
        comments: 'No Comments',
    },
    {
        id: 6,
        image: myblog,  // Replace with actual image path
        category: 'Blog',
        title: 'Fostering Creativity and Innovation in Students: The TSUS Approach',
        introduction: 'Introduction What is the biggest point of differentiation among students? Previously, this was the technical skill that they bore. However,',
        date: 'September 2, 2024',
        comments: 'No Comments',
    },
];

export default function BlogPage() {
    return (
        <>
        <Header/>
        <div className="bg-white min-h-screen">
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
                <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Blog</h1>
                    <div className="flex items-center text-lg mt-2">
                        <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
                        <a href="/" className="text-[#EDEDED] hover:text-white">
                            Home</a>

                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <a href="/about-us" className="text-[#EDEDED] hover:text-white">About</a>
                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <span className='text-[#F3D805]'>Blogs</span>
                    </div>
                </div>
            </section>


            <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPostsData.map(post => (
                        <BlogPostCard
                            key={post.id}
                            image={post.image}
                            category={post.category}
                            title={post.title}
                            introduction={post.introduction}
                            date={post.date}
                            comments={post.comments}
                        />
                    ))}
                </div>
            </section>
        </div>
             <diV className="mt-[200px]">
                 <Footer />
 
             </diV>
        </>
    );
};

// export default BlogPage;