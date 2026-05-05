import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/live'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'

import { Author } from '@/components/author'
import { Categories } from '@/components/categories'
import { POSTS_QUERY_RESULT } from '@/sanity/types'
import { PublishedAt } from '@/components/published-at'
import { urlFor } from '@/sanity/lib/image'
export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY })

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-white">
      <h1 className="text-4xl font-bold text-gray-900">Post index</h1>
      <ul className="grid grid-cols-1 divide-y divide-purple-200">
        {posts.map((post) => (
          <li key={post._id}>
                <Link className="group" href={`/posts/${post.slug!.current}`}>
      <article className="flex flex-col-reverse gap-4 md:grid md:grid-cols-12 md:gap-0">
        <div className="md:col-span-2 md:pt-1">
          <Categories categories={post.categories} />
        </div>
        <div className="md:col-span-5 md:w-full">
          <h2 className="text-2xl text-pretty font-semibold text-gray-900 group-hover:text-purple-600 transition-colors relative">
            <span className="relative z-[1]">{post.title}</span>
            <span className="bg-purple-50 z-0 absolute inset-0 rounded-lg opacity-0 transition-all group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75" />
          </h2>
          <div className="flex items-center mt-2 md:mt-6 gap-x-6">
            <Author author={post.author} />
            <PublishedAt publishedAt={post.publishedAt} />
          </div>
        </div>
        <div className="md:col-start-9 md:col-span-4 rounded-lg overflow-hidden flex">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).width(400).height(200).url()}
              width={400}
              height={200}
              alt={post.mainImage.alt || post.title || ''}
            />
          ) : null}
        </div>
      </article>
    </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/" className="text-purple-600 hover:text-purple-700">&larr; Return home</Link>
    </main>
  )
}