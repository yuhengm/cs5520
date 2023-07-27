import { StyleSheet, View } from 'react-native';
import { React, useState, useEffect } from 'react';
// import { collection, onSnapshot, query } from 'firebase/firestore';

import ColorScheme from '../constants/ColorScheme';
import { screenContentContainer } from '../constants/StylesTemplate';
import EntryList from '../components/EntryList';
import Hint from '../components/UI/Hint';
import Loading from '../components/UI/Loading';

const OverLimitEntries = () => {
    const entries = [
        {
            entryId: 3,
            amount: 300,
            description: '3rd description',
            isOverLimit: true
        }
    ]

    const emptyEntries = []

    const [isLoading, setIsLoading] = useState(false);
    const [entriesList, setEntriesList] = useState(entries);



    return (
        <View style={styles.screen}>
            {isLoading && <Loading />}
            {entriesList.length === 0 ? <Hint>You don't have any over-limit entries.</Hint> : <EntryList entriesList={entriesList} />}
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        ...screenContentContainer
    }
});

export default OverLimitEntries;