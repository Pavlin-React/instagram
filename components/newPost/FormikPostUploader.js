import React, { useState } from 'react'
import { View, Text } from 'react-native'
import * as Yup from 'yup'
import { formik } from 'formik'

let PLACEHOLDER_IMG ='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'

let uploadPostSchemas = Yup.object().shape({
  imageUrl = Yup.string().url().required('A Url is required'),
  caption = Yup.string().max(2200, 'Caption has reached a character limit.')
})

const FormikPostUploader = () => {
  let [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
  return (
    <View>
      <Text style={{color: 'white'}} >Formik</Text>
    </View>
  )
}

export default FormikPostUploader
