import { useState } from 'react'
import cantones from './data/cantones'
import {
  Container,
  Box,
  Center,
  Button,
  CardFooter,
  CardBody,
  Image,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Card,
  CardHeader,
  Divider,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  Highlight,
  HStack,
  useDisclosure,
  Link
} from '@chakra-ui/react'
import '@fontsource/poppins/400.css';
import '@fontsource/open-sans/700.css'
import ecomerces from './data/ecomerces'
import ImageSlider from './utils/carousel';
import AnimatedTextWord from './title'


// Resto del código...

function App() {
  const [ecomerce, setEcomerce] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const HandleEcomerce = (data) => {
    setEcomerce(data)
  }
  const filterImages = (images) => {
    console.log(images)
    if (images.length > 1) {
      return images.filter((_, index) => index !== 0)
    }
    return images

  }

  return (

    <Container bgGradient="linear(to-r, primary.100 14%,primary.200  40%, #FFFFFF )"
      minW="100%"
      minH="100vh"
      paddingBottom={8}
      paddingX={8}>

      <Box w={"100%"}
        //filter='auto' blur='1px'

        position={"relative"}
        height={"12vh"}
        marginTop={0}
        marginBottom={20} >
        <Box
          boxShadow={'md'}
          backdropFilter='auto'
          backdropBlur='18px'
          bg={"whiteAlpha.50"}
          left={0}
          w={"100%"}
          height={"12vh"}
          position={"fixed"}

          zIndex={2}>
          <Center>
            <Text mt={2} fontWeight='extrabold' fontSize={['2xl', '3xl', '4xl', '5xl']} as={"b"}>
              <AnimatedTextWord text={"Ecommerce  de  Orellana"} />
            </Text>
          </Center>

        </Box>
      </Box>



      <Box
        paddingY={'5%'}
        paddingX={'1%'}
        position={"relative"}
      >
        <Box

          position="absolute"
          // transition="all 0.3s ease"
          // _hover={{ filter:"auto", blur:"2px" }}
          top="0"
          left="0"
          height={'100%'}
          w={"100%"}
          //bg={"#50BCAE"}
          bgImage={"prueba.png"}
          backgroundSize={"auto"}
          backgroundPosition="center"
          borderRadius='lg'
          //filter='auto' blur='1px'
          boxShadow={'2xl'}
          opacity={0.8}
        >

        </Box>


        <SimpleGrid


          minChildWidth='300px'
          minHeight={'350px'}
          spacing={3}>

          {
            cantones.map((key, index) => {

              return <Card
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
                key={index} size={'lg'} boxShadow='lg'>
                <CardBody>
                  {/* <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  /> */}
                  <ImageSlider slides={key.img} height={"200px"} width={"300px"} />
                  <Stack mt='6' spacing='3'>
                    <Center>
                      <Heading fontFamily={`'Poppins', sans-serif`} size='md'>{key.canton}</Heading>

                    </Center>
                  </Stack>
                </CardBody>
              </Card>
            })
          }

        </SimpleGrid >

      </Box>
      <Divider marginBottom={10} marginTop={10} bg={"black"} orientation='horizontal' />

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(230px, 1fr))'>

        {
          ecomerces.map((key, index) => {
            return <Card key={key.id} transition="all 0.7s ease"
              _hover={{ transform: "scale(1.03)" }} boxShadow={"xl"}>
              <CardHeader >
                <Center>
                  <Heading fontFamily={`'Poppins', sans-serif`} size='md'> {key.title}</Heading>

                </Center>
              </CardHeader>

              <CardBody >
                <Center>
                  <Image
                    src={key.images[0]}
                    alt='Green double couch with wooden legs'
                    borderRadius='full'
                    boxSize='180px'

                  />
                </Center>
                <Text>{key.description}</Text>
              </CardBody>
              <CardFooter>

                <Button m={"auto"} onClick={() => {
                  onOpen();
                  HandleEcomerce(key);

                }}>Ver mas</Button>


              </CardFooter>
            </Card>




          })
        }
      </SimpleGrid>

      <Drawer onClose={onClose} isOpen={isOpen} size={"xl"}>

        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>{ecomerce.title}</DrawerHeader>
          <DrawerBody p={4} bgGradient="n(to-r, primary.100 14%,primary.200  40%, #FFFFFF )" >

            <Card
              boxShadow={"xl"}
              variant={"outline"}
              direction={{ base: 'column', sm: 'row' }}
              overflow='auto'
              padding={3}
            >

              <Box maxW={{ base: '100%', sm: '50%' }} >
                <ImageSlider slides={ ecomerce.images} height={"90%"} width={"90%"} />
              </Box>

              <Stack>
                <CardBody>
                  <Heading size='md'>{ecomerce.title}</Heading>

                  <Stack pt={2} spacing={2}>
                    <Text fontSize='xl'>{ecomerce.description}</Text>

                    {ecomerce.owner !== "" ? (
                      <Text fontSize='xl'>
                        <Highlight query='Propiertario' styles={{ py: '1', fontWeight: 'bold' }}>
                          Propiertario:
                        </Highlight> {ecomerce.owner}
                      </Text>
                    ) : null}
                    {ecomerce.email !== "" ? (
                      <Text fontSize='xl'>
                        <Highlight query='Email' styles={{ py: '1', fontWeight: 'bold' }}>
                          Email:
                        </Highlight> {ecomerce.email}
                      </Text>
                    ) : null}

                    {ecomerce.number !== "" ? (
                      <Text fontSize='xl'>
                        <Highlight query='Contacto' styles={{ py: '1', fontWeight: 'bold' }}>
                          Contacto:
                        </Highlight> {ecomerce.number}
                      </Text>
                    ) : null}
                    {ecomerce.addres !== "" ? (
                      <Text fontSize='xl'>
                        <Highlight query='Direccion' styles={{ py: '1', fontWeight: 'bold' }}>
                          Direccion:
                        </Highlight> {ecomerce.addres}
                      </Text>
                    ) : null}

                  </Stack>
                  <HStack mt={3} alignItems={"center"} w={"100%"} justifyContent={"center"} spacing='24px'>

                    <Box as={ecomerce.urlInstagram != "" ? "a" : null} href={ecomerce.urlInstagram} transition="all 0.3s ease"
                      _hover={{ transform: "scale(1.05)" }} w='15%' h='15%' >
                      <Image src='icons/3721672-instagram_108066.svg'>
                      </Image>
                    </Box>
                    <Box as={ecomerce.urlFacebook != "" ? "a" : null} transition="all 0.3s ease"
                      _hover={{ transform: "scale(1.05)" }} href={ecomerce.urlFacebook} w='13%' h='13%' >
                      <Image src='icons/facebook_icon_130940.svg'>
                      </Image>
                    </Box>
                    <Box as={ecomerce.urlStore != "" ? "a" : null} transition="all 0.3s ease"
                      _hover={{ transform: "scale(1.05)" }} href={ecomerce.urlStore} w='15%' h='15%' >
                      <Image src='icons/cart_120706.svg'>
                      </Image>
                    </Box>
                    <Box as={ecomerce.urlWhatsapp != "" ? "a" : null} transition="all 0.3s ease"
                      _hover={{ transform: "scale(1.05)" }} href={ecomerce.urlWhatsapp} w='14%' h='14%' >
                      <Image src='icons/whatsapp-4102606_113811.svg'>
                      </Image>
                    </Box>
                  </HStack>

                </CardBody>
              </Stack>
            </Card>

          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Container>

  )
}

export default App
