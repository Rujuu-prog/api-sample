import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { CardCustom } from 'app/components/CardCustom'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })
  const testLinkProps = useLink({
    href: '/test',
  })

  return (
    <>
      <CardCustom title="ランダムで猫の画像を表示するAPI" subTitle="Random Cat image API" url='/random-cat' />
      <CardCustom title="ランダムでトリビアを返すAPI" subTitle="Random Trivia API" url='/trivia' />
    </>
  )
}

