import { StatusBar } from 'expo-status-bar';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Image } from 'react-native';
import { Button, Appbar, Avatar, Card, IconButton, Drawer } from 'react-native-paper';
import styled from 'styled-components'

const Home = styled(Button)`
height: 75%;
width: 50%;
display:flex;
justify-content: center;
`
export default function Main() {
    return (
        <Layout>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Cats" />
                <Appbar.Action icon="cat" onPress={() => { }} />
                <Avatar.Image size={50} src={('https://placekitten.com/50/50')} />
            </Appbar.Header>

            <Drawer.CollapsedItem
                icon="inbox"
                label="Inbox"
            />

            <Drawer.Item
                style={{ backgroundColor: '#F5F5DC' }}
                icon="star"
                label="idk what this is"
                onPress={() => Drawer.active}
            />

            <Card.Title
                title="Secret Formula"
                subtitle="???"
                left={(props) => <Avatar.Icon {...props} icon="food" />}
                right={(props) => <IconButton {...props} icon="lock" onPress={() => { }} />}
            />

            <Home icon="camera" mode="elevated" onPress={() => console.log('Pressed')}>
                Press me to slay
            </Home> 

        </Layout>
    )
};

