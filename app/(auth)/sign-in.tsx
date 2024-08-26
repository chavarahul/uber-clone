import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useCallback, useState } from 'react'
import { icons, images } from '../../constants/index'
import InputFeild from '../../components/InputFeild'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import OAuth from '../../components/OAuth'
import { useSignIn } from '@clerk/clerk-expo'

const SignIn = () => {

  const { isLoaded, signIn, setActive } = useSignIn();

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;
    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      })
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/(root)/(tabs)/home');
      } else {
        Alert.alert("Error", "Log in failed. Please try again.");

      }
    } catch (error: any) {
      Alert.alert('Error', error.errors[0].longMessage)
    }
  }, [isLoaded, form])
  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex-1 bg-white'>
        <View className='relative w-full h-[250px]'>
          <Image
            source={images.signUpCar}
            className='z-0 w-full h-[250px]'
          />
          <Text
            className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'
          >
            Welcome👋
          </Text>
        </View>
        <View className='p-5'>
          <InputFeild
            label='Email'
            placeholder='Enter your email'
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputFeild
            label='Password'
            placeholder='Enter your password'
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title='Sign In'
            onPress={onSignInPress}
            className='mt-6'
          />
          <OAuth />
          <Link href={"/sign-up"} className='text-[16px] font-JakartaBold text-center text-general-200 mt-10'>
            <Text>Don't have an account?</Text>
            <Text className='text-primary-500'>Sign up</Text>
          </Link>
        </View>

      </View>
    </ScrollView>
  )
}

export default SignIn