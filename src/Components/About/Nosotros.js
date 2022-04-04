import React, { useState } from 'react'
import { Container } from '@mui/material'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import NosotrosText from './NosotrosText'
import Title from './../Title/Title'
import NosotrosList from './NosotrosList'
import Spinner from '../../shared/Spinner/Spinner'
import ShowModal from '../../Utils/AlertsProps'
import { getMembers } from '../../redux/NosotrosReducer/nosotrosReducer'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const nosotrosMockInfo = {
  title: 'Nosotros',
  text:
    'Somos una organización independiente, nos autofinanciamos. Por lo tanto tu aporte sostenido en el tiempo nos permite analizar y proyectar con anticipación cómo brindarle oportunidades a cada familia de la forma más eficiente. Son un enorme sostén para nosotros y para las familias en necesidad de una vivienda adecuada. Nuestra visión es construir una cultura de la solidaridad centrada en la persona y en la necesidad de lograr mejores y más dignas condiciones de vida, de trabajo, de libertad y de participación social para todos. Nuestra aspiración es reforzar las capacidades de cada persona movilizando los recursos existentes, mediante el apoyo de una organización ágil y eficiente, dando protagonismo a la sociedad civil y promoviendo el verdadero desarrollo.',
  image:
    'https://res.cloudinary.com/danb0chax/image/upload/v1648403877/SomosMas/Mask_group_i1m8td.png',
}

const Nosotros = () => {
  const dispatch = useDispatch()
  const { members } = useSelector((state) => state.members)

  useEffect(() => {
    dispatch(getMembers())
  }, [])

  return (
    <>
      <Title title={nosotrosMockInfo.title} imgSrc={nosotrosMockInfo.image} />
      <Container>
        <NosotrosText text={nosotrosMockInfo.text} />
        <NosotrosList miembros={members} />
      </Container>
    </>
  )
}
export default Nosotros
