import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components'

import { Button, Input, Text, View } from '@ui-kitten/components';

export default function LoginForm({
    loginState = 'before',
    onLoginClick = () => { }

}) {

    var c = "blue";
    var btn_text = "click me";

    if (loginState === "before") {
        c = "blue";
        btn_text = "click me";
    }

    if (loginState === "during") {
        c = "green"
        btn_text = "LOADING..."
    }

    if (loginState === "after") {
        c = "grey"
        btn_text = "Success"
    }


    return <View>
        <Text>Login Form</Text>
        <Input disabled={loginState !== "before"}
            placeholder='email' />
        <Input disabled={loginState !== 'before'}
            placeholder='password' />
        <Button color={c} onClick={onLoginClick}>{btn_text} {loginState === 'during'} </Button>
    </View>
}
