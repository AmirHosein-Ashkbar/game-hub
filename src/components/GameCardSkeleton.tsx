import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import { ReactNode } from 'react'

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height='200px' />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton