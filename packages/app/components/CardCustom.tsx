import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, Card, Image, H2, CardProps } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { ReactNode, useState } from 'react'
import { useLink } from 'solito/link'

  export function CardCustom(props: CardProps, children:ReactNode) {
    return (
      <Card theme="dark" elevate size="$4" bordered {...props}>
        <Card.Header padded>
          <H2>Sony A7IV</H2>
          <Paragraph theme="alt2">Now available</Paragraph>
        </Card.Header>
        <Card.Footer padded>
          <XStack f={1} />
          <Button br="$10">Purchase</Button>
        </Card.Footer>
        <Card.Background>
          
        </Card.Background>
      </Card>
    )
  }