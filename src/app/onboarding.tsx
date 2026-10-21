import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Onboarding = () => {
    return (
        <View>
            <Text>Onboarding</Text>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Sign In</Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-accent text-white p-4">Create Account</Link>
        </View>
    )
}

export default Onboarding
