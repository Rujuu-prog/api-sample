import { XStack, YStack, YGroup, ListItem, SizableText } from '@my/ui'
import { Flag, Heart, Bell, Settings } from '@tamagui/lucide-icons'
import { Link } from 'solito/link'

export function SideList(){
    return(
        // <SContainer>
        // </SContainer>
            <YGroup als="center" bordered w={240} size="$4" cursor="pointer">
                <YGroup.Item>
                    <Link href="/">
                    <ListItem borderTopRightRadius="9px" borderTopLeftRadius="9px" hoverTheme icon={Flag} justifyContent="flex-start">
                        <SizableText size="$4" cursor="pointer">Home</SizableText>
                    </ListItem>
                    </Link>
                </YGroup.Item>
                <YGroup.Item>
                <Link href="/favorite">
                    <ListItem hoverTheme icon={Heart} justifyContent="flex-start">
                    <SizableText size="$4" cursor="pointer">Favorite</SizableText>
                    </ListItem>
                </Link>
                </YGroup.Item>
                <YGroup.Item>
                <Link href="/bell">
                    <ListItem hoverTheme icon={Bell} justifyContent="flex-start">
                    <SizableText size="$4" cursor="pointer">Bell</SizableText>
                    </ListItem>
                </Link>
                </YGroup.Item>
                <YGroup.Item>
                <Link href="/settings">
                    <ListItem borderBottomRightRadius="9px" borderBottomLeftRadius="9px" hoverTheme icon={Settings} justifyContent="flex-start">
                    <SizableText size="$4" cursor="pointer">Settings</SizableText>
                    </ListItem>
                </Link>
                </YGroup.Item>
            </YGroup>
    )
}
