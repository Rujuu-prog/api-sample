import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, Card, Image, H2, CardProps } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { CardCustom } from 'app/components/CardCustom'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function ScreenScreen() {
    return (
      <XStack $sm={{ flexDirection: 'column' }} px="$4" space>
        <CardCustom
          animation="bouncy"
          size="$4"
          w={250}
          h={300}
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        />
        <CardCustom size="$5" w={250} h={300} />
        <p>screen</p>
      </XStack>
    )
  }