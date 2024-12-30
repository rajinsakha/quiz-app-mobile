import { View, Text, Image } from 'react-native'
import React from 'react'

import { Link } from 'expo-router'
import { Category } from '@/types/quiz'


const CategoryCard = ({id,image, name,totalQuestions}: Category) => {
  return (
    <Link href={`/categories/${id}`} className='rounded-xl bg-white p-2 flex flex-col gap-4 w-[48%] shadow-sm'>
      <Image source={image} className='h-[200px] w-full rounded-xl' resizeMode='cover' />
      <View className='flex flex-col gap-2'>
      <Text className='text-2xl font-semibold'>{name}</Text>
      <Text className='text-sm'>{totalQuestions} Questions</Text>
      <View className='flex flex-row justify-between'>
        <Text>{totalQuestions} Points</Text>
      </View>

      </View>
  
    </Link>
  )
}

export default CategoryCard