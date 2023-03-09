import { XStack, YGroup, ListItem } from '@my/ui'
import { Search, Monitor, Bell, Settings } from '@tamagui/lucide-icons'
import { Link } from 'solito/link'

export function SideList(){
    return(
        <div >
            <YGroup als="center" bordered w={240} size="$4">
            <YGroup.Item>
                <Link href="/">
                <ListItem style={{borderRadius: '9px 9px 0 0'}} hoverTheme icon={Search}>
                        Search
                </ListItem>
                </Link>
            </YGroup.Item>
            <YGroup.Item>
            <Link href="/screen">
                <ListItem hoverTheme icon={Monitor}>
                Screen
                </ListItem>
            </Link>
            </YGroup.Item>
            <YGroup.Item>
            <Link href="/test">
                <ListItem hoverTheme icon={Bell}>
                Bell
                </ListItem>
            </Link>
            </YGroup.Item>
            <YGroup.Item>
            <Link href="/test">
                <ListItem style={{borderRadius: '0 0 9px 9px'}} hoverTheme icon={Settings}>
                Settings
                </ListItem>
            </Link>
            </YGroup.Item>
            </YGroup>
        </div>
    )
}
