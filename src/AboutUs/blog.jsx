import React, { useEffect, useState } from 'react';
// import BlogPostCard from './BlogPostCard';
import BlogPostCard from './blogpost';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import icon from '../assets/home/arrowicon.png'
import myblog from '../assets/home/blogimage.png'
import axios from 'axios';
import { toast } from 'react-toastify';

// import blogimg from '../assets/home/blogimage.png'


export default function BlogPage() {

     const [blogBannerData, setBlogBannerData] = useState();
     const [blogData,setBlogData]=useState([])
      const [error, setError] = useState();
    
      const getBlogBannerData = async () => {
        axios
          .get(`${import.meta.env.VITE_APP_URL}api/user/blog-banner`)
          .then((res) => {
            setBlogBannerData(res?.data?.data);
            console.log(res.data);
          })
          .catch((error) => {
            setError(
              error?.response?.data?.message ||
                error?.message ||
                "something went wrong"
            );
            toast.error(
              error?.response?.data?.message ||
                error?.message ||
                "something went wrong"
            );
          });
      };

      const getBlogData = async () => {
        axios
          .get(`${import.meta.env.VITE_APP_URL}api/user/blogs`)
          .then((res) => {
            setBlogData(res?.data?.data);
          })
          .catch((error) => {
            setError(
              error?.response?.data?.message ||
                error?.message ||
                "something went wrong"
            );
            toast.error(
              error?.response?.data?.message ||
                error?.message ||
                "something went wrong"
            );
          });
      };
    
      useEffect(() => {
        getBlogBannerData();
      }, []);

      useEffect(() => {
        getBlogData();
      }, []);
    return (
        <>
        <Header/>
        <div className="bg-white min-h-screen">
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${import.meta.env.VITE_APP_URL}${blogBannerData?.banner})` }}>
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
                    
                    {blogData?.length>0 &&
                    blogData.map(post => (
                        <BlogPostCard
                            key={post.id}
                            image={post.image}
                            title={post.title}
                            introduction={post.description}
                            date={post.createdAt}
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