import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
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
  const data = await (await fetch("https://7o58c12lu4.execute-api.us-west-2.amazonaws.com/dev/products/cause/" + cause)).json()
  return {
    props: {
      data: data
    },
  }
}