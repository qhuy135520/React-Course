import Heading from '../ui/Heading'
import Row from '../ui/Row'
import CabinTable from '../features/cabins/CabinTable'
import CreateCabinForm from '../features/cabins/CreateCabinForm'
import Button from '../ui/Button'
import { useState } from 'react'

function Cabins() {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row type='vertical'>
        <CabinTable />
        <Button
          variation='primary'
          size='medium'
          onClick={() => setShowForm((showForm) => !showForm)}
        >
          Add new Cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  )
}

export default Cabins

