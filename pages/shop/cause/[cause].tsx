import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import absoluteUrl from 'next-absolute-url'
import React from 'react'
import { IProduct } from '../../../types'

type Data = {
  causeName: string,
  products: IProduct[]
}

export default function ShopCause({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>shop</div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params, req }) => {
  const { cause } = params
  const { host, origin } = absoluteUrl(req)
  console.log("host", host, origin)
  const data: Data = await (await fetch(`${origin}/api/cause?cause=${cause}`)).json()
  return {
    props: {
      data: data
    },
  }
}