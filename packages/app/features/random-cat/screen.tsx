import { Anchor, Button, H1, H4, Input, Paragraph, Separator, Sheet, XStack, YStack, Card, Image, H2, CardProps, Text, Spinner } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { CardCustom } from 'app/components/CardCustom';
import React, { useState } from 'react';
import { useLink } from 'solito/link';
import useSWR, { mutate } from 'swr';
import axios from "axios";
import { H3 } from '@my/ui/src';

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
      <XStack px="$4" space="$12" >
        <YStack $sm={{  }} px="$4" space alignContent="center" flexWrap="wrap" alignItems="center">
          <H1>Random Cat API</H1>
          {data?<Image src={data.data.file} width={200} height={300} />:<div style={{width:"200px", height:"300px", display:"flex", justifyContent:"center", alignItems:"center"}}><Spinner size="large" color="$blue10" /></div>}
          <Button onPress={()=>(getCatImg())} width="100%">Change Image</Button>
          <Anchor href='https://github.com/Rujuu-prog/api-sample/blob/main/packages/app/features/random-cat/screen.tsx' target="_blank" rel="noopener noreferrer" maxWidth="150px" textAlign="center">View source</Anchor>
        </YStack>
        <YStack px="$4" py="$5" space>
          <H3>API info</H3>
          <Text>🌏 <Anchor href='https://aws.random.cat/' target="_blank" rel="noopener noreferrer">Official Site</Anchor></Text>
          <Text>📡 <Anchor href='https://aws.random.cat/meow' target="_blank" rel="noopener noreferrer">End Point</Anchor></Text>
          <H3>Summary</H3>
          <Text>かわいい猫ちゃんの画像を、ランダムに返してくれるAPIです。</Text>
          <H3>Comment</H3>
          <Text>ただただかわいい😸<br/>404のページとかで使いたい。</Text>
        </YStack>
      </XStack>
    )
  }