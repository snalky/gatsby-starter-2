import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex h-screen w-full flex-col items-center justify-center px-2">
        <div className="mx-auto rounded-lg bg-black">
          <h1 className="px-4 py-4 text-center text-base font-bold capitalize text-white sm:text-3xl lg:text-8xl">
            Page not found
          </h1>
        </div>
        <Link to="/">Go home</Link>.
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
