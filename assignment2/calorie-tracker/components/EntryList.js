import { StyleSheet, View, Text, FlatList } from 'react-native';
import React from 'react';

import { defaultContainer, column } from '../constants/StylesTemplate';
import Entry from './Entry';

const EntryList = ({ entriesList }) => {

    const renderEntry = ({ item }) => {
        return (<Entry entryInfo={item} />)
    };

    return (
        <View style={styles.column}>
            <View style={styles.container}>
                <FlatList
                    data={entriesList}
                    renderItem={renderEntry}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        ...defaultContainer,
        paddingTop: 4,
    },
    column: {
        ...column,
        flex: 1,
    }
});

export default EntryList;