import React from 'react'
import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImage.Url'
import * as S from './styles'

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
