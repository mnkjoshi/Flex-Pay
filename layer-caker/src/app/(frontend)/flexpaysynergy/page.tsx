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
import laptop2 from "../../../../public/laptop2.jpg";








export default async function Page() {
  return (
    <><><><><><><><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-gradient-to-r from-purple-50 to-blue-50 ">
      <TitleThree>The Synergy Gateway</TitleThree>


    </section><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-white">
        <h1 className="text-[35px] text-center font-sans text-gray-900">Elevate Your Payment Capabilities </h1>
        <h2 className="text-[20px] font-sans mx-20 text-gray-700">The Synergy Gateway is our powerful, essential technology designed for acquirers, payment service providers (PSPs), gateways, and orchestrators. It allows you to seamlessly integrate our entire suite of payment solutions—your "secret weapon"—into your current platform, substantially expanding your global reach and payment offerings in vital markets. </h2>
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
        <div>
          
          <section className="container mx-auto grid grid-cols-1 gap-12 p-12">
            <div>
                      <h1 className="text-[35px] font-sans m-1 text-gray-900">Core Advantages <br></br><br></br> A Unified Global Integration </h1>

                 <h2 className="text-[20px] font-sans m-1 text-gray-700">Access a comprehensive world of global payment opportunities and value-added services through one fast, simplified integration.</h2>
        <br></br> 
        <h1 className="text-[35px] font-sans m-1 text-gray-900">Payment Method Management: </h1>
        <h2 className="text-[20px] font-sans m-1 text-gray-700">Deliver relevant local payment options to consumers in your target regions. Utilize the full product catalog or customize a specialized selection for your merchants.</h2>
                <br></br> 

        <h1 className="text-[35px] font-sans m-1 text-gray-900">Seamless Identity Access- SSO: </h1>
        <h2 className="text-[20px] font-sans m-1 text-gray-700">Our Single Sign-On (SSO) capability enables you to instantly deploy new and additional payment methods with zero integration friction.</h2>
         <br></br> 

        <h1 className="text-[35px] font-sans m-1 text-gray-900">Value-Added Services: </h1>
        <h2 className="text-[20px] font-sans m-1 text-gray-700">Easily incorporate essential extras, including 3DS2, fraud prevention solutions, a carbon calculator, network tokenization, transaction optimization tools, donation features, and more.</h2>

         

            </div>
          </section>
        </div>

      </section></><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-purple-100 ">
        

        <div className="container mx-auto grid grid-cols-3 gap-6 p-12 bg-purple-100 ">
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center"> 
3DS2 & Fraud Prevention </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center"> Easily incorporate essential security solutions to protect transactions and reduce risk.</h1>

          </div>
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center">Carbon Calculator </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center">Provide environmental impact tracking for conscious consumers and merchants.</h1>

          </div>
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center">Network Tokenization</h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center"> Enhance security and transaction success with advanced tokenization technology. </h1>

          </div>

        </div>
        <div className="container mx-auto grid grid-cols-2 gap-6 p-12 bg-purple-100 ">
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center"> 
Transaction Optimization </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center"> Maximize approval rates with intelligent routing and optimization tools.</h1>

          </div>
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center">Donation Features</h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center">Enable charitable giving capabilities seamlessly within the payment flow.</h1>

          </div>

        </div>
      </section></>
       <section className="container mx-auto grid grid-cols-1 gap-12 p-12">
            <div>
          <div>    
        
        </div> 
       <div className="container mx-auto grid grid-cols-2 gap-12 p-12 bg-gray-50">
                              <Image className="object-cover m-4" src={laptop2} alt="company logo" />

        <div> 
                <h1 className="text-[35px] text-center font-sans m-1 text-gray-900">Out of Funds Flow:</h1>
                <h2 className="text-[20px] font-sans m-1 text-gray-700">Our streamlined system facilitates direct commercial agreements with payment partners, ensuring quick and independent settlement pathways.</h2>
                <h1 className="text-[35px] text-center font-sans m-1 text-gray-900">Flexible API Design:</h1>
                <h2 className="text-[20px] font-sans m-1 text-gray-700">The API is engineered for versatile deployment, allowing effortless integration with e-commerce platforms, IVR systems, payment terminal hardware, and other critical systems.</h2>

      </div>
      


          </div> 
        <div className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-purple-100 ">
        <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center">Continuous Feature Expansion:</h1>
                    <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center">Integrate once and future-proof your product.</h1>
                                      <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center">The platform continuously updates itself, adding new payment brands and services automatically without requiring additional development effort from your team.</h1>

        </div>
<div className="container mx-auto grid grid-cols-3 gap-6 p-12 bg-purple-100 ">

          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center">Single Integration</h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center">Connect once to access everything</h1>

          </div>
          <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center"> Automatic Updates </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center"> New features deploy seamlessly </h1>

          </div>
                    <div>
            <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-pretty max-w-5xl text-center"> 
Zero Development </h1>
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-gray-900 text-pretty max-w-2.5xl font-sans my-7 text-plain text-center"> No additional effort required</h1>

          </div>
     

        </div>
        <div className="container mx-auto grid grid-cols-4 gap-6 p-12">

                              <Image className="object-cover m-4" src={woo} alt="company logo" />
                      <Image className="object-cover m-4" src={bigcommerce} alt="company logo" />
                      <Image className="object-cover m-4" src={magento} alt="company logo" />
                      <Image className="object-cover m-4" src={salesforce} alt="company logo" />

          </div> 
            </div>

          </section>
          <section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-purple-100 ">
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
      <section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-gradient-to-r from-purple-600 to-purple-700 content-center">

        <h1 className="text-1xl md:text-2xl lg:text-3xl text-gray-900 text-pretty font-sans my-7 text-center text-plain"> Get in touch with us today to discover how Flex-Pay is shaping the future of global payments. </h1>
        <Link
              href="/signup"
            >
              <div className = "flex justify-center"> 
              <button className="bg-white hover:bg-purple-50 text-purple-700 font-bold px-4 py-3 rounded-full">
        SIGN UP
        </button>
            </div> 
            </Link>
 
      </section><section className="container mx-auto grid grid-cols-2 gap-6 p-12 bg-purple-600 content-center">

       
        <Link href="/bottomheader/aboutus">

         <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-gray-900 text-pretty font-sans my-2 text-center text-plain"> About Us </h1>
            
                    

            </Link>
        <Link
              href="/bottomheader/legal"
            >
                       <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-gray-900 text-pretty font-sans my-2 text-center text-plain"> Legal </h1>
      
            
            </Link>
        <Link
              href="/bottomheader/careers"
            >
                        <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-gray-900 text-pretty font-sans my-2 text-center text-plain"> Careers </h1>
     
            
            </Link>
        <Link
              href="/bottomheader/legal"
            >
                             <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-gray-900 text-pretty font-sans my-2 text-center text-plain"> Privacy </h1>

            
            </Link>
        <Link
              href="/bottomheader/contactus"
            >
                 <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-gray-900 text-pretty font-sans my-2 text-center text-plain"> Contact Us </h1>
            
            
            </Link>
        <Link
              href="/bottomheader/legal"
            >
                <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-gray-900 text-pretty font-sans my-2 text-center text-plain"> Terms & Conditions </h1>
             
            
            </Link>
 
      </section></>

  )
  
}




