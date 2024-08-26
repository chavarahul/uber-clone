import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper'
import { data } from '../../constants/index'
import CustomButton from '../../components/CustomButton'
const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveindex] = useState(0);

    const isLastSlide = activeIndex === data.onboarding.length - 1;
    return (
        <SafeAreaView className='flex h-full items-center justify-between bg-white'>
            <TouchableOpacity
                onPress={() => { router.replace('/(auth)/sign-up') }}
                className='w-full flex justify-end items-end p-4'
            >
                <Text className='text-black text-md font-JakartaBold'>Skip</Text>
            </TouchableOpacity>
            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />}
                activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
                onIndexChanged={(index) => setActiveindex(index)}
            >
                {
                    data.onboarding.map((item) => (
                        <View key={item.id} className='flex justify-center items-center p-5'>
                            <Image
                                source={item.image}
                                className='w-full h-[300px]'
                                resizeMode='contain'
                            />
                            <View
                                className='flex flex-row items-center justify-center w-full mt-10'
                            >
                                <Text className='text-black text-3xl  font-JakartaExtraBold mx-3 text-center'>{item.title}</Text>
                            </View>
                            <Text className='text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3'>{item.description}</Text>
                        </View>
                    ))
                }

            </Swiper>
            <CustomButton
                title={`${isLastSlide ? 'Get Started' : 'Next'}`}
                onPress={() => isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)}
                className='mt-10 w-11/12 mb-5'
            />
        </SafeAreaView>
    )
}

export default Onboarding