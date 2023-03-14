import { XStack, YGroup, ListItem } from '@my/ui'
import { Flag, Heart, Bell, Settings } from '@tamagui/lucide-icons'
import { Link } from 'solito/link'

export function SideList(){
    return(
        // <SContainer>
        // </SContainer>
            <YGroup als="center" bordered w={240} size="$4" >
                <YGroup.Item>
                    <Link href="/">
                    <ListItem borderTopRightRadius="9px" borderTopLeftRadius="9px" hoverTheme icon={Flag}>
                            Home
                    </ListItem>
                    </Link>
                </YGroup.Item>
                <YGroup.Item>
                <Link href="/favorite">
                    <ListItem hoverTheme icon={Heart}>
                        Favorite
                    </ListItem>
                </Link>
                </YGroup.Item>
                <YGroup.Item>
                <Link href="/bell">
                    <ListItem hoverTheme icon={Bell}>
                    Bell
                    </ListItem>
                </Link>
                </YGroup.Item>
                <YGroup.Item>
                <Link href="/settings">
                    <ListItem borderBottomRightRadius="9px" borderBottomLeftRadius="9px" hoverTheme icon={Settings}>
                    Settings
                    </ListItem>
                </Link>
                </YGroup.Item>
            </YGroup>
    )
}
