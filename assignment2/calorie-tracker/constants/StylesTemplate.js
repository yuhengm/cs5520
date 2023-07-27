import ColorScheme from "./ColorScheme"

export const defaultContainer = {
    flex: 1,
}

export const screenContentContainer = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: ColorScheme.ContentBackgroundShaded,
    paddingHorizontal: 10,
    paddingTop: 10,
}

export const navigatorTitle = {
    headerStyle: {
        backgroundColor: ColorScheme.TitleBackground,
    },
    headerTintColor: ColorScheme.TitleText,
    headerTitleAlign: 'center',
}

export const column = {
    flexDirection: 'column',
}

export const row = {
    flexDirection: 'row',
}

export const pressableStyles = {
    androidRipple: {
        color: ColorScheme.TextInactive,
        foreground: true
    },
    pressed: {
        opacity: 0.75,
    }
}