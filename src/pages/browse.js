import React from 'react'
import BrowseContainer from '../container/browseContainer'
import {useContent} from '../hooks/useContent'
import selectionFilter from '../utils/selectionFilter'

function Browse(){

    const {series} = useContent('series')
    const {films} = useContent('films')
        const slides = selectionFilter({series,films})

    return(
            <BrowseContainer slides={slides} / >
    )
}

export default Browse