import React, {memo} from "react"
import PropTypes from 'prop-types'
import {Grid, Skeleton} from '../../../components'
import Card from './Card'

function Board({data}){
    const{cases,today, recovered, deaths, todayCases} = data

    const getValue = (value) => value ? value : <Skeleton variant='text' width={182} height={60}/>

    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label ='Total de casos' color='#5d78fe'/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label ='Casos hoje' color='#000'/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label ='Total de mortos' color='#e95078'/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label ='Total de recuperados' color='green'/>
            </Grid>
        </Grid>
    )
}

export default Board