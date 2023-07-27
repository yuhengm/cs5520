import { StyleSheet, View } from 'react-native';
import { React, useState, useEffect } from 'react';
// import { collection, onSnapshot, query } from 'firebase/firestore';

import ColorScheme from '../constants/ColorScheme';
import { screenContentContainer } from '../constants/StylesTemplate';
import EntryList from '../components/EntryList';
import Hint from '../components/UI/Hint';
import Loading from '../components/UI/Loading';

const AllEntries = () => {

    const entries = [
        {
            entryId: 1,
            amount: 100,
            description: '1st description',
            isOverLimit: false
        },
        {
            entryId: 2,
            amount: 200,
            description: '2nd description',
            isOverLimit: false
        },
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
            {entriesList.length === 0 ? <Hint>You don't have any entries.</Hint> : <EntryList entriesList={entriesList} />}
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        ...screenContentContainer
    }
});

export default AllEntries;