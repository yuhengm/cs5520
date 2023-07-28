import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { firestore } from '../firebase/setup';

import { screenContentContainer } from '../constants/StylesTemplate';
import EntryList from '../components/EntryList';
import Hint from '../components/UI/Hint';
import Loading from '../components/UI/Loading';

const AllEntries = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [entriesList, setEntriesList] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const q = query(collection(firestore, 'calorie-entries'));
        const unsub = onSnapshot(q, (snapshot) => {
            if (snapshot.empty) {
                setEntriesList([]);
                setIsLoading(false);
                return;
            } else {
                setEntriesList(
                    snapshot.docs.map((snapDoc) => {
                        let data = snapDoc.data();
                        data = { ...data, key: snapDoc.id };
                        setIsLoading(false);
                        return data;
                    })
                )
            }
        })

        return () => {
            unsub();
        }

    }, []);


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