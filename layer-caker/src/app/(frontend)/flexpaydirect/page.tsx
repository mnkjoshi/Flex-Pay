import Link from 'next/link'
import { TitleTwo } from '@/components/titletwo'; 
import { TitleThree } from '@/components/titlethree'
import { Title } from '@/components/title'

import Image from 'next/image';
import website from "../../../../public/website.jpg";
import bigcommerce from "../../../../public/bigcommerce-logo-dark.png";
import magento from "../../../../public/magento.png";
import salesforce from "../../../../public/salesforce-dark.png";
import woo from "../../../../public/woo.png";
import floatingphone from "../../../../public/floatingphone.png";







export default async function Page() {
  return (
    <><><><><><><><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-gradient-to-r from-purple-50 to-blue-50">
      <TitleThree>Unified Commerce for Merchants</TitleThree>


    </section><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-white">
        <h1 className="text-[35px] text-center font-sans text-gray-900">Transform Your Checkout with FLEX-PAY Direct </h1>
        <h2 className="text-[20px] font-sans mx-20 text-gray-700">FLEX-PAY Direct is the unified-commerce solution modern businesses rely on. One secure API integrates a global network of payment providers, every major payment method, and the back-office services you need—so you can launch, scale, and settle without re-engineering your stack. </h2>
       <Link
              href="/signup"
            >
              <div className = "flex justify-center"> 
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-4 py-3 rounded-full">
        Learn more
        </button>
            </div> 
            </Link>
      </section></></></><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-purple-100 ">
        <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty text-center"> Streamline and enhance your entire customer journey with rapid, one-time integration.</h1>

      </section></><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-white">
        <h1 className="text-[35px] text-center font-sans m-1 text-gray-900">The Challenge Facing Modern Merchants <br></br><br></br> Traditional Payment Integration </h1>
        <div>
          <section className="container mx-auto grid grid-cols-2 p-12 bg-gray-50">
            <div>
                   <ul className="list-disc list-inside text-gray-700"> <li> Multiple separate integrations required. </li>
                <li>  Months of development time </li>
                <li> Ongoing maintenance burden </li>
              </ul>
            </div>
            <div>  
                <ul className="list-disc list-inside text-gray-700"> <li> Limited payment method flexibility </li>
                <li>  Fragmented reporting and analytics </li>
                <li> Slow time-to-market for new methods </li>
              </ul>
           </div> 
        
          </section>
          <section className="container mx-auto grid grid-cols-1 gap-12 p-12 bg-white">
            <div>
             
        <h1 className="text-[35px] text-center font-sans m-1 text-gray-900">FLEX-PAY DIRECT: Primary Advantages That Drive Results </h1>
        <h2 className="text-[20px] text-center font-sans m-1 text-gray-700">Streamline and enhance your entire customer journey with rapid, one-time integration. Unlock unparalleled payment flexibility and a comprehensive suite of complementary services designed to optimize every transaction.</h2>

         

            </div>
          </section>
        </div>

      </section></><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-purple-100 ">
        

        <div className="container mx-auto grid grid-cols-3 gap-6 p-12 bg-purple-100 ">
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center"> 
Out of Funds Flow </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center"> Our efficient structure allows direct contractual arrangements with payment services for accelerated settlements. </h1>

          </div>
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center"> Continuous Development </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center">Integrate just once and enjoy zero ongoing integration effort; the platform constantly adds new payment methods and services. </h1>

          </div>
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center"> Additional Services </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center"> Access providers for Fraud Prevention, 3DS2, a Carbon Calculator, Transaction Review & Optimization, Network Tokenization, Donation features, and more. </h1>

          </div>

        </div>
      </section></>
       <section className="container mx-auto grid grid-cols-1 gap-12 p-12 bg-white">
            <div>
             
        <h1 className="text-[35px] text-center font-sans m-1 text-gray-900">Hosted Payment Page: Your Brand, Your Rules </h1>
       <div className="container mx-auto grid grid-cols-2 gap-12 p-12 bg-gray-50">
      <ul className="list-disc list-inside my-50 text-gray-700"> <li> Drag-and-drop payment method ordering </li>
                <li> Custom branding and color schemes</li>
                <li> Custom branding and color schemes</li>
                <li> Responsive design for all devices</li>
                <li> Real-time preview of changes </li> 
                                <li> A/B testing capabilities </li> 
        

              </ul>
                      <Image className="object-cover m-4" src={website} alt="company logo" />


          </div> 
        <h2 className="text-[20px] text-center font-sans m-1 text-gray-700">Utilize our native Hosted Payment Page to create a checkout experience that perfectly reflects your brand identity. With no-code tools, you can reorganize and customize your checkout flow without developer resources.</h2>


          <h2 className="text-[20px] text-center font-sans m-1 text-gray-700">Maintain complete visual control while leveraging enterprise-grade payment infrastructure.</h2>
           <br></br><br></br>
            <h1 className="text-[35px] text-center font-sans m-1 text-gray-900">Pre-Built E-Commerce Connectors </h1>
          <h2 className="text-[20px] text-center font-sans m-1 text-gray-700">Deploy faster with comprehensive pre-built integrations for the leading e-commerce platforms. Our connectors are maintained and updated by Flex-Pay, ensuring compatibility and optimal performance.</h2>
<div className="container mx-auto grid grid-cols-2 gap-6 p-12 bg-purple-100 ">
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center"> 
WooCommerce </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center"> Seamless WordPress integration for the world's most popular e-commerce plugin. Install in minutes and start accepting payments immediately. </h1>

          </div>
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center">BigCommerce</h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center">Native integration with BigCommerce's robust platform. Full feature support including subscription payments and multi-currency. </h1>

          </div>
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center"> Magento </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center"> Enterprise-grade connector for Magento 2.x with advanced order management and inventory synchronization capabilities. </h1>

          </div>
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center">  Salesforce Commerce </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center"> Deep integration with Salesforce ecosystem, enabling unified customer data and seamless order processing workflows. </h1>

          </div>

        </div>
        <div className="container mx-auto grid grid-cols-4 gap-6 p-12 bg-white">

                              <Image className="object-cover m-4" src={woo} alt="company logo" />
                      <Image className="object-cover m-4" src={bigcommerce} alt="company logo" />
                      <Image className="object-cover m-4" src={magento} alt="company logo" />
                      <Image className="object-cover m-4" src={salesforce} alt="company logo" />

          </div> 
            </div>

          </section>
          <section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-indigo-800 ">
      <TitleThree>Innovation that eliminates the complexities of payment orchestration.</TitleThree>
            <TitleTwo>Unlock unparalleled payment options and services with one unified connection.</TitleTwo>


    </section>
    <section className="container mx-auto grid grid-cols-2 gap-6 p-12">
                      <Image className="object-cover m-4" src={floatingphone} alt="company logo" />
            <div> 
            <Title>How FLEX-PAY Direct Works</Title> 
            <br></br>
            <h2 className="text-1x0.5 md:text-1xl lg:text-2xl font-bold text-slate-800 text-pretty text-black"> Innovation that eliminates the complexities of payment orchestration. Our sophisticated architecture handles the technical heavy lifting, allowing you to focus on delivering exceptional customer experiences. </h2>
            <br></br> 
            <h2 className="text-1x0.5 md:text-1xl lg:text-2xl font-bold text-slate-800 text-pretty text-black">Merchant Integration </h2>
            <br></br> 
            <h2 className="text-1x0.3 md:text-1xl lg:text-1.5xl font-bold text-slate-800 text-pretty text-black">Streamline and enhance your entire customer journey with rapid, one-time integration. Unlock unparalleled </h2>
            <br></br> 
            <h2 className="text-1x0.5 md:text-1xl lg:text-2xl font-bold text-slate-800 text-pretty text-black">Intelligent Routing </h2>
            <br></br> 
            <h2 className="text-1x0.5 md:text-1xl lg:text-1.5xl font-bold text-slate-800 text-pretty text-black">Streamline and enhance your entire customer journey with rapid, one-time integration. Unlock unparalleled </h2>
            <br></br> 
            <h2 className="text-1x0.5 md:text-1xl lg:text-2xl font-bold text-slate-800 text-pretty text-black">Payment Processing </h2>
            <br></br> 
            <h2 className="text-1x0.5 md:text-1xl lg:text-1.5xl font-bold text-slate-800 text-pretty text-black">Streamline and enhance your entire customer journey with rapid, one-time integration. Unlock unparalleled </h2>
            <br></br> 
            <h2 className="text-1x0.5 md:text-1xl lg:text-2xl font-bold text-slate-800 text-pretty text-black">Customer Completion </h2>
            <br></br> 
            <h2 className="text-1x0.5 md:text-1xl lg:text-1.5xl font-bold text-slate-800 text-pretty text-black">Streamline and enhance your entire customer journey with rapid, one-time integration. Unlock unparalleled </h2>

            </div> 

    </section>
      <section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-linear-to-r from-black to-red-900 content-center">

        <h1 className="text-1xl md:text-2xl lg:text-3xl text-slate-800 text-pretty text-white font-sans my-7 text-center text-plain"> Get in touch with us today to discover how Flex-Pay is shaping the future of global payments. </h1>
        <Link
              href="/signup"
            >
              <div className = "flex justify-center"> 
              <button className="bg-white hover:bg-purple-900 text-black font-bold px-4 py-3 rounded-full">
        SIGN UP
        </button>
            </div> 
            </Link>
 
      </section><section className="container mx-auto grid grid-cols-2 gap-6 p-12 bg-purple-900 content-center">

       
        <Link href="/bottomheader/aboutus">

         <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> About Us </h1>
            
                    

            </Link>
        <Link
              href="/bottomheader/legal"
            >
                       <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> Legal </h1>
      
            
            </Link>
        <Link
              href="/bottomheader/careers"
            >
                        <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> Careers </h1>
     
            
            </Link>
        <Link
              href="/bottomheader/legal"
            >
                             <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> Privacy </h1>

            
            </Link>
        <Link
              href="/bottomheader/contactus"
            >
                 <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> Contact Us </h1>
            
            
            </Link>
        <Link
              href="/bottomheader/legal"
            >
                <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> Terms & Conditions </h1>
             
            
            </Link>
 
      </section></>

  )
  
}