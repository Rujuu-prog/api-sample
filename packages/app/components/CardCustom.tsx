import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, Card, Image, H2, CardProps } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { ReactNode, useState } from 'react'
import { useLink } from 'solito/link'

type Props = {
  title: string
  subTitle: string
  url: string
}

  export function CardCustom<Props>({title, subTitle, url}) {
    const linkProps = useLink({
      href: url,
    })
    return (
      <Card theme="dark" elevate size="$4" bordered hoverStyle={{ scale: 0.925 }} pressStyle={{ scale: 0.875 }} animation="bouncy" w={250} h={300} scale={0.9}>
        <Card.Header padded>
          <H2>{title}</H2>
          <Paragraph theme="alt2">{subTitle}</Paragraph>
        </Card.Header>
        <Card.Footer padded>
          <XStack f={1} />
          <Button br="$10" {...linkProps}>Try</Button>
        </Card.Footer>
        <Card.Background>
          
        </Card.Background>
      </Card>
    )
  }