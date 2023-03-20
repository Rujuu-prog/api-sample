import { Anchor, Button, H1, H4, Input, Paragraph, Separator, Sheet, XStack, YStack, Stack, Card, Image, H2, CardProps, Text, Spinner, Select, Adapt } from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'
import { ChevronDown, ChevronUp, Check } from '@tamagui/lucide-icons';
import { CardCustom } from 'app/components/CardCustom';
import React, { useState } from 'react';
import { useLink } from 'solito/link';
import useSWR, { mutate } from 'swr';
import axios from "axios";
import parse from 'html-react-parser';
import { H3 } from '@my/ui/src';

interface Data {
  "data": {
    "response_code": number,
    "results": [
        {
            "category": string,
            "type": string,
            "difficulty": string,
            "question": string,
            "correct_answer": string,
            "incorrect_answers": string[]
        }
    ]
}
}


export function TriviaScreen() {
    // const {val, setVal} = useState('');
    const { data, error } = useSWR<Data>('https://opentdb.com/api.php?amount=1', axios);
    /**
     * トリビアの再取得
     */
    const getTrivia = () => {
      mutate('https://opentdb.com/api.php?amount=1', false)
    }
    /** 
    * 配列の中身をシャッフルする関数
    * @param {(string | undefined)[]} array - シャッフルしたい配列
    * @return {(string | undefined)[]} シャッフルされた配列
    */
    function shuffleArray(array: (string | undefined)[]): (string | undefined)[] {
      const newArray = [...array]; // 元の配列を変更しないように新しい配列を作成
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // 0 から i までの整数をランダムに生成
        if (newArray[i] !== undefined && newArray[j] !== undefined) {
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // i番目とj番目の要素を交換
        }
      }
      return newArray;
    }
    let answerArray: (string | undefined)[] = data?.data?.results[0].incorrect_answers || [];
    answerArray.push(data?.data?.results[0].correct_answer);
    answerArray = shuffleArray(answerArray);
    const newAnswerArray = answerArray.filter((element): element is string => element !== undefined);
    console.log(data);
    return (
      <XStack px="$4" space="$12" >
        <YStack $sm={{  }} px="$4" space alignContent="center" flexWrap="wrap" alignItems="center">
          <H1>Trivia API</H1>
          {data?
          <YStack>
            <Text>😲 Difficulty</Text>
            <Text paddingLeft="10px">➡️ {data.data.results[0].difficulty}</Text>
            <Text>🤔 Question</Text>
            <XStack paddingLeft="10px">
            <span>➡️ </span><Text maxWidth="400px">{parse(data.data.results[0].question)}</Text>
            </XStack>
            <Select id="answer">
              <Select.Trigger iconAfter={ChevronDown}>
                <Select.Value placeholder={parse(data?.data?.results[0].category)} />
              </Select.Trigger>

              <Adapt when="sm" platform="touch">
                <Sheet modal dismissOnSnapToBottom>
                  <Sheet.Frame>
                    <Sheet.ScrollView>
                      <Adapt.Contents />
                    </Sheet.ScrollView>
                  </Sheet.Frame>
                  <Sheet.Overlay />
                </Sheet>
              </Adapt>

              <Select.Content zIndex={200000}>
                <Select.ScrollUpButton ai="center" jc="center" pos="relative" w="100%" h="$3">
                  <YStack zi={10}>
                    <ChevronUp size={20} />
                  </YStack>
                  <LinearGradient
                    start={[0, 0]}
                    end={[0, 1]}
                    fullscreen
                    colors={['$background', '$backgroundTransparent']}
                    br="$4"
                  />
                </Select.ScrollUpButton>

                <Select.Viewport minWidth={200}>
                  <Select.Group space="$-0">
                    <Select.Label>{parse(data?.data?.results[0].category)}</Select.Label>
                    {newAnswerArray.map((item, i) => {
                      return (
                        <Select.Item index={i} key={item} value={item}>
                          <Select.ItemText>{parse(item)}</Select.ItemText>
                          <Select.ItemIndicator ml="auto">
                            <Check size={16} />
                          </Select.ItemIndicator>
                        </Select.Item>
                      )
                    })}
                  </Select.Group>
                </Select.Viewport>

                <Select.ScrollDownButton ai="center" jc="center" pos="relative" w="100%" h="$3">
                  <YStack zi={10}>
                    <ChevronDown size={20} />
                  </YStack>
                  <LinearGradient
                    start={[0, 0]}
                    end={[0, 1]}
                    fullscreen
                    colors={['$backgroundTransparent', '$background']}
                    br="$4"
                  />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select>
          </YStack>
          :<Stack style={{width:"200px", height:"300px", display:"flex", justifyContent:"center", alignItems:"center"}}><Spinner size="large" color="$blue10" /></Stack>}
          <Button onPress={()=>(getTrivia())} width="100%">Change Trivia</Button>
          <Anchor href='https://github.com/Rujuu-prog/api-sample/blob/main/packages/app/features/trivia/screen.tsx' target="_blank" rel="noopener noreferrer" maxWidth="150px" textAlign="center">View source</Anchor>
        </YStack>
        <YStack px="$4" py="$5" space>
          <H3>API info</H3>
          <Text>🌏 <Anchor href='https://opentdb.com/api_config.php' target="_blank" rel="noopener noreferrer">Official Site</Anchor></Text>
          <Text>📡 <Anchor href='https://opentdb.com/api.php?amount=1' target="_blank" rel="noopener noreferrer">End Point</Anchor></Text>
          <H3>Summary</H3>
          <Text>豆知識をランダムで返してくれるAPIです。<br/>APIで返ってくるオブジェクトの中身はクイズ形式になっています。</Text>
          <H3>Comment</H3>
          <Text>簡単にクイズアプリを作りたい時などに使えそうですね。</Text>
        </YStack>
      </XStack>
    )
  }