import Navbar from '../Components/Navbar';
import Footer from '../Components/footer'
import Loader from '../Components/loader/pageLoader'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const BlogPage = () => {
    const LazyComp = dynamic(() => import('../views/blogpage'), { ssr: false, suspense: true, loading: () => <Loader /> })
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no" />
            </Head>
            <div className="flex flex-col justify-between max-h-full min-h-screen">
                <div className="w-full">
                    <Navbar />
                    <LazyComp />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default BlogPage;