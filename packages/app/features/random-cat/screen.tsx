import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, Card, Image, H2, CardProps } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { CardCustom } from 'app/components/CardCustom';
import React, { useState } from 'react';
import { useLink } from 'solito/link';
import useSWR, { mutate } from 'swr';
import axios from "axios";

interface Data {
  data: {file: string};
}


export function RandomCatScreen() {
    const { data, error } = useSWR<Data>('https://aws.random.cat/meow', axios);
    const getCatImg = () => {
      mutate('https://aws.random.cat/meow', false)
      console.log('called');
    }
    return (
      <YStack $sm={{ flexDirection: 'column' }} px="$4" space>
        <H1>random cat api</H1>
        {data&&<Image src={data.data.file} width={200} height={300} />}
        <Button onPress={()=>(getCatImg())}>Change Image</Button>
        <Anchor href='https://github.com/Rujuu-prog/api-sample/blob/main/packages/app/features/random-cat/screen.tsx' target="_blank" rel="noopener noreferrer">View source</Anchor>
      </YStack>
    )
  }