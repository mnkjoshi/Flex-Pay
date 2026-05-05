import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-b from-gray-100 to-gray-50 border-t border-gray-200/50 text-gray-600 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-bold text-lg text-gray-900">Flex‑Pay</h3>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">Unified global payment infrastructure for modern commerce.</p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-gray-900">Products</h4>
          <Link href="/flexpaydirect" className="text-sm text-gray-600 hover:text-purple-600 transition">Flex‑Pay Direct</Link>
          <Link href="/flexpaysynergy" className="text-sm text-gray-600 hover:text-purple-600 transition">Flex‑Pay Synergy</Link>
          <Link href="/posts" className="text-sm text-gray-600 hover:text-purple-600 transition">Insights & Press</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-gray-900">Company</h4>
          <Link href="/bottomheader/aboutus" className="text-sm text-gray-600 hover:text-purple-600 transition">About</Link>
          <Link href="/bottomheader/careers" className="text-sm text-gray-600 hover:text-purple-600 transition">Careers</Link>
          <Link href="/bottomheader/contactus" className="text-sm text-gray-600 hover:text-purple-600 transition">Contact</Link>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-gray-200/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flex‑Pay. All rights reserved.</p>
        <div className="flex gap-6 items-center">
          <Link href="/bottomheader/legal" className="text-sm text-gray-600 hover:text-purple-600 transition">Legal</Link>
          <Link href="/bottomheader/privacy" className="text-sm text-gray-600 hover:text-purple-600 transition">Privacy</Link>
          <Link href="/signup" className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition">Sign up</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
