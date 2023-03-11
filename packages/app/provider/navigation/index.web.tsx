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
      <SSideMenu>
        <SideList />
      </SSideMenu>
      <SMain>
        <XStack $sm={{ flexDirection: 'column' }} px="$4" space>
          {children}
        </XStack>
      </SMain>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SMain = styled.div`
  flex: 2;
`;

const SSideMenu = styled.div`
  flex: 1;
  max-width: 300px;
  div{ 
    position: sticky;
    top: 90px;
    left: 30px;
  }
`;


