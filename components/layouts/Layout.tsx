import React, { FC } from 'react'
import Head from 'next/head'
import { NavBar } from '../ui';

interface Props {
  title?: String
  children?: React.ReactNode;
}

export const Layout: FC<Props> = ({ children, title }:Props) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content='EstebanSalas' />
            <meta name='description' content='Información sobre el pokemon ...' />
            <meta name='keywords' content='XXX, pokemon, pokedex' />
        </Head>

        <NavBar/>

        <main style={{padding: '0px 20px'}} >
            {children}
        </main>
    </>
  )
}
