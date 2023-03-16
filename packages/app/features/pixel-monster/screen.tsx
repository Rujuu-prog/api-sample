import { Anchor, Button, H1, H4, Input, Paragraph, Separator, Sheet, XStack, YStack, Card, Image, H2, CardProps, Text, Spinner } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { CardCustom } from 'app/components/CardCustom';
import React, { useState } from 'react';
import { useLink } from 'solito/link';
import useSWR, { mutate } from 'swr';
import axios from "axios";
import { H3 } from '@my/ui/src';

interface Data {
  data: string;
}

// TODO: corsの設定がされていないAPIのため、django側でendpointを叩いてみる
export function PixelMonsterScreen() {
    const imgFormat: string = 'webp';
    const imgSize: string = '100';
    const endPoint: string = 'https://app.pixelencounter.com/api/basic/monsters/random/'+imgFormat+'?size='+imgSize;
    const { data, error } = useSWR<Data>(endPoint, axios);
    console.log(data);
    const getCatImg = () => {
      mutate(endPoint, false)
      console.log('called');
    }
    return (
      <XStack px="$4" space="$12" >
        <YStack $sm={{  }} px="$4" space alignContent="center" flexWrap="wrap" alignItems="center">
          <H1>Random Cat API</H1>
          {data?<Image src={data} width={200} height={300} />:<div style={{width:"200px", height:"300px", display:"flex", justifyContent:"center", alignItems:"center"}}><Spinner size="large" color="$blue10" /></div>}
          <Button onPress={()=>(getCatImg())} width="100%">Change Image</Button>
          <Anchor href='https://github.com/Rujuu-prog/api-sample/blob/main/packages/app/features/random-cat/screen.tsx' target="_blank" rel="noopener noreferrer" maxWidth="150px" textAlign="center">View source</Anchor>
        </YStack>
      </XStack>
    )
  }