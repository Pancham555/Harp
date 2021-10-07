import React from 'react'
import Image from 'next/image'
export const config = { amp: 'hybrid' }
const Footer = () => {
    return (
        <div className='font-medium'>
            <div className="bg-gray-100">
                <div className="flex flex-wrap justify-center max-w-6xl m-auto text-gray-800">
                    <div className="w-48 p-5 ">
                        <div className="text-xs font-medium text-gray-500 uppercase">Home</div>
                        <a className="block my-3" href="#">
                            Services
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3" href="#">
                            Products <span className="p-1 text-xs text-teal-600"></span>
                        </a><a className="block my-3" href="#">
                            About Us
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3" href="#">
                            Pricing
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a><a className="block my-3" href="#">
                            Partners
                            <span className="p-1 text-xs text-teal-600">New</span>
                        </a>
                    </div>
                    <div className="w-48 p-5 ">
                        <div className="text-xs font-medium text-gray-500 uppercase">User</div>
                        <a className="block my-3" href="#">
                            Sign in
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3" href="#">
                            New Account
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3" href="#">
                            Demo
                            <span className="p-1 text-xs text-teal-600">New</span>
                        </a>
                        {/* <a className="block my-3" href="#">
                            Career
                            <span className="p-1 text-xs text-teal-600">We&quot;re hiring</span>
                        </a> */}
                        <a className="block my-3" href="#">
                            Surveys
                            <span className="p-1 text-xs text-teal-600">New</span>
                        </a>
                    </div>
                    <div className="w-48 p-5 ">
                        <div className="text-xs font-medium text-gray-500 uppercase">Resources</div>
                        <a className="block my-3" href="#">
                            Documentation
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3" href="#">
                            Tutorials
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3" href="#">
                            Support
                            <span className="p-1 text-xs text-teal-600">New</span>
                        </a>
                    </div>
                    <div className="w-48 p-5 ">
                        <div className="text-xs font-medium text-gray-500 uppercase">Product</div>
                        <a className="block my-3" href="#">
                            Our Products
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3" href="#">
                            Great Deals
                            <span className="p-1 text-xs text-teal-600">New</span>
                        </a>
                        <a className="block my-3" href="#">
                            Analytics
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3" href="#">
                            Mobile
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                    </div>
                    <div className="w-48 p-5 ">
                        <div className="text-xs font-medium text-gray-500 uppercase">Support</div>
                        <a className="block my-3" href="#">
                            Help Center
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3" href="#">
                            Privacy Policy
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3" href="#">
                            Conditions
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                    </div>
                    <div className="w-48 p-5 ">
                        <div className="text-xs font-medium text-gray-500 uppercase">Contact us</div>
                        <a className="block my-3" href="#">
                            XXX XXXX, Floor 4 Assam, India
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                        <a className="block my-3 break-all" href="#">
                            contact@company.com
                            <span className="p-1 text-xs text-teal-600"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="px-5 pt-2 bg-gray-100 md:px-12">
                <div className="flex flex-col max-w-6xl px-3 pt-5 pb-5 m-auto text-sm text-gray-800 border-t-4 border-gray-300 rounded-lg md:flex-row">
                    <div className="mt-2">© Copyright 2020. All Rights Reserved.</div>
                    <div className="flex flex-row mt-2 md:flex-auto md:flex-row-reverse">
                        <a href="#" className="w-6 mx-2">

                            <Image
                                width='1000000'
                                height='1000000'
                                src="/instagram.png"
                                layout='intrinsic'
                                quality='100'
                                alt="instagram"
                                priority={true}
                                unoptimized={true}
                            />
                        </a>
                        <a href="#" className="w-6 mx-2">
                            <Image
                                width='1000000'
                                height='1000000'
                                src="/mail.png"
                                layout='intrinsic'
                                quality='100'
                                alt="mail"
                                priority={true}
                                unoptimized={true}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
