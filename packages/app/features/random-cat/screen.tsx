import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, Card, Image, H2, CardProps } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { CardCustom } from 'app/components/CardCustom'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function RandomCatScreen() {
    return (
      <XStack $sm={{ flexDirection: 'column' }} px="$4" space>
        <p>random cat api</p>
      </XStack>
    )
  }