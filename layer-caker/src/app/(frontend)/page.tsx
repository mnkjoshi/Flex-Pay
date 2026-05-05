import Link from 'next/link'
import Image from 'next/image'
import { Hero } from '@/components/hero'
import afterpay from "../../../public/afterpay.png"
import applepay from "../../../public/applepay.png"
import klarna from "../../../public/klarna.png"
import bnpparibas from "../../../public/bnpparibas.png"
import googlepay from "../../../public/googlepay.png"
import alipay from "../../../public/alipay.png"
import paypal from "../../../public/paypal.png"
import mastercard from "../../../public/mastercard.png"
import bancontact from "../../../public/bancontact.png"
import bigcommerce from "../../../public/bigcommerce.png"
import bpi from "../../../public/bpi.png"
import salesforce from "../../../public/salesforce.png"
import floatingphone from "../../../public/floatingphone.png"
import hands from "../../../public/hands.jpg"
import robot from "../../../public/robot.jpg"

export const metadata = {
  title: "Flex-Pay - Unified Global Payment Infrastructure",
  description: "Connect to 140+ countries, 400+ payment methods, and 120+ currencies through a single, intelligent API. Flex-Pay revolutionizes payment orchestration.",
  openGraph: {
    title: "Flex-Pay - Global Payment Infrastructure",
    description: "Unified payments for modern commerce",
    type: "website",
  },
}

export default async function Page() {
  return (
    <>
      <Hero />

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 text-center mb-12">Seamlessly integrated with the world's top payment platforms</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-60 hover:[&>*]:opacity-100 transition-opacity">
            <Image className="h-12 w-auto object-contain" src={afterpay} alt="afterpay" />
            <Image className="h-12 w-auto object-contain" src={applepay} alt="apple pay" />
            <Image className="h-12 w-auto object-contain" src={klarna} alt="klarna" />
            <Image className="h-12 w-auto object-contain" src={googlepay} alt="google pay" />
            <Image className="h-12 w-auto object-contain" src={paypal} alt="paypal" />
            <Image className="h-12 w-auto object-contain" src={mastercard} alt="mastercard" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Flex-Pay?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "One API Integration", desc: "Connect once and access 400+ payment methods across all regions" },
              { icon: "🌍", title: "Global Coverage", desc: "Support 140+ countries with local payment preferences built-in" },
              { icon: "💱", title: "Multi-Currency", desc: "Process transactions in 120+ currencies with real-time rates" },
              { icon: "🔒", title: "Enterprise Security", desc: "Bank-grade encryption and compliance with all regulations" },
              { icon: "📊", title: "Advanced Analytics", desc: "Real-time insights and transaction optimization tools" },
              { icon: "⚙️", title: "No-Code Setup", desc: "Drag-and-drop customization without developer intervention" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-purple-50 border border-purple-200 rounded-xl p-8 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Built for Every Business Type</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Flex-Pay Direct",
                subtitle: "For Merchants",
                desc: "Unified checkout with drag-and-drop customization. Settle faster with direct agreements and pre-built e-commerce connectors.",
                link: "/flexpaydirect",
              },
              {
                title: "Flex-Pay Synergy",
                subtitle: "For PSPs & Gateways",
                desc: "White-label solution with SSO integration, multi-level hierarchy, and full customization for your merchant base.",
                link: "/flexpaysynergy",
              },
              {
                title: "Flex-Pay Banking",
                subtitle: "For Financial Institutions",
                desc: "Transform traditional banking into agile fintech. Modernize infrastructure and expand payment capabilities.",
                link: "#",
              },
            ].map((solution, idx) => (
              <Link key={idx} href={solution.link}>
                <div className="bg-gradient-to-br from-white to-gray-50 border border-purple-200 rounded-xl p-8 hover:border-purple-400 hover:shadow-xl transition-all cursor-pointer h-full">
                  <div className="text-purple-600 text-sm font-semibold mb-2">{solution.subtitle}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce Platforms Section */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Pre-Built E-Commerce Connectors</h2>
          <p className="text-gray-600 text-center mb-12">Deploy in minutes with native integrations for the leading platforms</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <Image className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition" src={bigcommerce} alt="bigcommerce" />
            <Image className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition" src={salesforce} alt="salesforce" />
            <Image className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition" src={klarna} alt="klarna" />
            <Image className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition" src={bnpparibas} alt="bnpparibas" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 border-t border-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Payments?</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">Join leading companies leveraging Flex-Pay for global payments orchestration</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup" className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl text-lg">
              Get Started Free
            </Link>
            <Link href="/bottomheader/contactus" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
