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

export const buttonStyles = {
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    button: {
        marginHorizontal: 15,
        minWidth: 100,
    }
}

export const contentText = {
    fontSize: 16,
    color: ColorScheme.ContentText,
    marginBottom: 4,
    marginTop: 20
}

export const cardStyle = {
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: ColorScheme.ContentBackground,
    marginVertical: 10,
    borderRadius: 6,
    elevation: 3,
    shadowColor: ColorScheme.Hint,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4
}