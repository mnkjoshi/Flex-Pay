import Link from 'next/link'
import { TitleTwo } from '@/components/titletwo'; 
import { TitleThree } from '@/components/titlethree'
import Image from 'next/image';
import skyscraper from "../../../../../public/skyscraper.jpg";
import hands from "../../../../../public/hands.jpg";
import robot from "../../../../../public/robot.jpg";
import scrabble from "../../../../../public/scrabble.jpg";
import dog from "../../../../../public/dog.jpg";



export default async function Page() {
  return (
    <><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-white ">
      <div> 
            <Image className="object-fit" src={skyscraper} alt="company logo" />

      </div>
      <h1 className="text-[35px] font-sans my-7 mx-20 text-bold text-center text-gray-900"> What is FLEX-PAY</h1>
      <h2 className="text-[15px] font-sans mx-50 text-gray-700">FLEX-PAY is a transformative payment infrastructure uniting nine dynamic payment types and a suite
        of advanced financial services, all accessible through a single seamless API.</h2>
      <br></br>
      <h2 className="text-[15px] font-sans text-center mx-50"> Built for scalability, flexibility, and innovation, FLEX-PAY enables PSPs,  acquirers, merchants and financial institutions to modernize their operations, simplify integrations, and deliver fintech-grade payment experiences.</h2>
      <h1 className="text-[35px] font-sans my-7 mx-20 text-bold text-center"> Our Mission</h1>

      <h2 className="text-[15px] font-sans text-center mx-50"> By uniting nine diverse payment methods and hundreds of integrations through one API, we’re <b> reshaping how money moves</b>—making global commerce more accessible, efficient, and equitable for everyone.</h2>
      <h2 className="text-[15px] font-sans text-center mx-50">At Flex-Pay, our mission is to <b> power the future of payments</b> by connecting the world through a single, intelligent payment infrastructure. </h2>
      <h2 className="text-[15px] font-sans text-center mx-50">We simplify complexity, bridge ecosystems, and empower businesses of every size to offer seamless, secure, <b>and inclusive payment experiences</b> —anywhere in the world. </h2>
      <h1 className="text-[35px] font-sans my-7 text-bold text-center"> Our Values </h1>
      <div className = "container mx-auto grid grid-cols-2 gap-6 p-12 bg-white "> 
      <Image className="object-fit" src={scrabble} alt="company logo" />
 
      <h2 className="text-[15px] font-sans text-center"><b>Integrity:</b><br></br>Trust is the foundation of every transaction.
        We operate with full transparency, accountability, and ethical rigor in all that we do—ensuring that our partners and clients can rely on Flex-Pay as a <b>secure, compliant, and trustworthy</b> technology partner. </h2>
      </div> 
      <div className = "container mx-auto grid grid-cols-2 gap-6 p-12 bg-white "> 
      <Image className="object-fit" src={hands} alt="company logo" />
      <h2 className="text-[15px] font-sans text-center"><b>Equality:</b><br></br> <br></br>Financial access should have no borders.

        We're driven by the belief that <b>everyone deserves a place in the global economy</b>—from emerging entrepreneurs to established enterprises.

        Our technology bridges gaps, enhances credit access, and creates opportunities for businesses and consumers alike, helping to <b>build a more inclusive financial world.</b> </h2>
      </div> 
      <div className = "container mx-auto grid grid-cols-2 gap-6 p-12 bg-white "> 
      <Image className="object-fit" src={robot} alt="company logo" />
      <h2 className="text-[15px] font-sans text-center"><b>Innovation:</b><br></br> <br></br>Innovation is in our DNA.

        We constantly challenge the status quo—advancing the boundaries of payment orchestration, automation, and user experience.

        By blending cutting-edge technology with strategic insight, Flex-Pay ensures our partners stay <b>future-ready in an ever-evolving digital landscape.</b></h2>
      </div> 
      <div className = "container mx-auto grid grid-cols-2 gap-6 p-12 bg-white "> 
      <Image className="object-fit" src={dog} alt="company logo" />
      <h2 className="text-[15px] font-sans text-center"><b>Fun:</b><br></br> <br></br>Trust is the foundation of every transaction. We operate with full transparency, accountability, and ethical rigor in all that we do—ensuring that our partners and clients can rely on Flex-Pay as a <b>secure, compliant, and trustworthy </b>technology partner. </h2>
      </div> 

    </section>
     <section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-gradient-to-r from-purple-600 to-purple-700 content-center">

        <h1 className="text-1xl md:text-2xl lg:text-3xl text-pretty text-white font-sans my-7 text-center text-plain"> Get in touch with us today to discover how Flex-Pay is shaping the future of global payments. </h1>
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

          <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-pretty text-white font-sans my-2 text-center text-plain"> About Us </h1>



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