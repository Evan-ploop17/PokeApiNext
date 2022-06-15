import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image";
import NextLink from 'next/link';

export const NavBar = () => {
    
  const { theme } = useTheme()
    
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 50px',
        backgroundColor: theme?.colors.gray100.value
    }} >
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='Una imágen de un pokemon'
        height={100}
        width={100}
      />
      
      <NextLink href="/" passHref>
            <Link>
              <Text color='white' h2>P</Text>
              <Text color='white'h3>okemon</Text>
            </Link>
        </NextLink>

      <Spacer css={{flex:1}} />

      <NextLink href="/favorites">
        <Link>
          <Text color="white"> Favoritos</Text>
        </Link>
      </NextLink>  
    </div>
  )
}