// on Web, we don't use React Navigation, so we avoid the provider altogether
// instead, we just have a no-op here
// for more, see: https://solito.dev/recipes/tree-shaking
import { XStack, YGroup, ListItem, Button } from '@my/ui'
import { SideList } from 'app/components/layout/SideList'
import styled from "styled-components";

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  return(
    <SContainer>
      <XStack $sm={{ flexDirection: 'column' }} px="$4" space>
        {children}
      </XStack>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;


