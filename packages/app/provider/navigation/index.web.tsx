// on Web, we don't use React Navigation, so we avoid the provider altogether
// instead, we just have a no-op here
// for more, see: https://solito.dev/recipes/tree-shaking
import { XStack, YGroup, ListItem, Button, YStack } from '@my/ui'
import { SideList } from 'app/components/layout/SideList'

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  return(
    <XStack position='relative'>
      <YStack flex={1} maxWidth="300px" position="absolute" top="90px" left="30px">
        <SideList />
      </YStack>
      <YStack flex={2} marginLeft="300px">
        <XStack $sm={{ flexDirection: 'column' }} px="$4" space>
          {children}
        </XStack>
      </YStack>
    </XStack>
  )
}
