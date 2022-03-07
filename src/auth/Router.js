import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStackFarmer } from './AppStackFarmer';
import { AuthStack } from './AuthStack';
// import { useAuth } from '../contexts/Auth';
// import { Loading } from '../components/Loading';

export const Router = () => {
    // const { authData, loading } = useAuth();

    // if (loading) {
    //     return <Loading />;
    // }

    const login = false

    return (
        <NavigationContainer>
            {login ? <AuthStack /> : <AppStackFarmer/> }
        </NavigationContainer>
    );
};