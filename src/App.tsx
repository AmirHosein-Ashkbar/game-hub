import { Button, ButtonGroup, Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
        <Grid templateAreas={{
          base:`"nav" "main"`,
          lg:`"nav nav" "aside main" `
        }}>
          <GridItem area="nav" >
            <Navbar />
          </GridItem>
          <Show above='lg'>
            <GridItem area="aside" bg="gold">
              aside
            </GridItem>
          </Show>
          
          <GridItem area="main" bg="dodgerblue">
            nav
          </GridItem>
        </Grid>
    </>
  )
}

export default App
